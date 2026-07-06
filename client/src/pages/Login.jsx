import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useAuth } from '@/context/AuthContext';

function Login() {
    const navigate = useNavigate();
    const { signInWithgoogle, signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handle_login_withgoogle = async () => {
        setError("");
        try {
            await signInWithgoogle();
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error signing in with Google:", error);
            setError(error.message || "Unable to sign in with Google.");
        }
    };

    const handle_login = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            setError("Please enter both email and password.");
            return;
        }

        setError("");
        setIsSubmitting(true);

        try {
            await signIn(email.trim(), password);
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error signing in:", error);
            setError(error.message || "Invalid email or password.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <section className="login">

            <div className="login-container">

                {/* Left */}

                <div className="login-left">

                    <img
                        src="/images/login-food.png"
                        alt="Food"
                    />

                </div>

                {/* Right */}

                <div className="login-right">

                    <div className="login-card">

                        <h1>Welcome Back 👋</h1>

                        <p>
                            Login to discover nearby restaurants and delicious food.
                        </p>

                        <button className="google-btn" onClick={handle_login_withgoogle}> 

                            <FcGoogle size={24} />

                            Continue with Google

                        </button>

                        <div className="divider">

                            <span></span>

                            <p>OR</p>

                            <span></span>

                        </div>

                        <form onSubmit={handle_login}>

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
                                        placeholder="Enter your password"
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

                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}

                                    </button>

                                </div>

                            </div>

                            <div className="forgot">

                                <Link to="/forgot-password">

                                    Forgot Password?

                                </Link>

                            </div>

                            {error && <p className="error-text">{error}</p>}

                            <button
                                className="login-btn"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Signing in..." : "Login"}
                            </button>

                        </form>

                        <p className="signup-text">

                            Don't have an account?

                            <Link to="/signup">

                                Sign Up

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Login;