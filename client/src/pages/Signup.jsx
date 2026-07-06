import "./Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from '@/context/AuthContext';

function Signup() {
    const navigate = useNavigate();
    const { signUp, signInWithgoogle } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handle_google_signup = async () => {
        setError("");
        try {
            await signInWithgoogle();
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error signing in with Google:", error);
            setError(error.message || "Unable to sign up with Google.");
        }
    };

    const handle_signup = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !password || !confirmPassword) {
            setError("Please fill out all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        setIsSubmitting(true);

        try {
            const data = await signUp(name.trim(), email.trim(), password);

            if (data?.user) {
                navigate("/", { replace: true });
            } else {
                setError("Please check your email to confirm your account.");
            }
        } catch (error) {
            console.error("Error signing up:", error);
            setError(error.message || "Unable to create your account.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <section className="signup">

            <div className="signup-container">

                {/* Left */}

                <div className="signup-left">

                    <img
                        src="/images/signup-food.png"
                        alt="Deliserve"
                    />

                </div>

                {/* Right */}

                <div className="signup-right">

                    <div className="signup-card">

                        <h1>Create Account 🚀</h1>

                        <p>
                            Join Deliserve and discover amazing local food.
                        </p>

                        <button className="google-btn" type="button" onClick={handle_google_signup}>

                            <FcGoogle size={22} />

                            Continue with Google

                        </button>

                        <div className="divider">

                            <span></span>

                            <p>OR</p>

                            <span></span>

                        </div>

                        <form onSubmit={handle_signup}>

                            <div className="input-group">

                                <label>Full Name</label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                            </div>

                            <div className="input-group">

                                <label>Email</label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>

                            <div className="input-group">

                                <label>Password</label>

                                <div className="password-input">

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />  

                                    <button
                                        type="button"
                                        className="eye-btn"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {
                                            showPassword ?
                                                <EyeOff size={20} />
                                                :
                                                <Eye size={20} />
                                        }

                                    </button>

                                </div>

                            </div>

                            <div className="input-group">

                                <label>Confirm Password</label>

                                <div className="password-input">

                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        className="eye-btn"
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                    >
                                        {
                                            showConfirmPassword ?
                                                <EyeOff size={20} />
                                                :
                                                <Eye size={20} />
                                        }

                                    </button>

                                </div>

                            </div>

                            {error && <p className="error-text">{error}</p>}

                            <button
                                className="signup-btn"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Creating account..." : "Create Account"}
                            </button>

                        </form>

                        <p className="login-text">

                            Already have an account?

                            <Link to="/login">

                                Login

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Signup;