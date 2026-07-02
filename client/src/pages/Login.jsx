import "./Login.css";
// import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Login() {

    const [showPassword, setShowPassword] = useState(false);

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

                        <button className="google-btn">

                            {/* <FcGoogle size={24} /> */}

                            Continue with Google

                        </button>

                        <div className="divider">

                            <span></span>

                            <p>OR</p>

                            <span></span>

                        </div>

                        <form>

                            <div className="input-group">

                                <label>Email</label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                />

                            </div>

                            <div className="input-group">

                                <label>Password</label>

                                <div className="password-input">

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
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

                            <button
                                className="login-btn"
                                type="submit"
                            >

                                Login

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