import "./Navbar.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {useAuth} from '@/context/AuthContext'
function Navbar(){
    const { user, signOutUser } = useAuth();
    const [menuOpen,setMenuOpen]=useState(false);
    useEffect(() => {
        user && console.log("User is logged in:", user);
        !user && console.log("User is not logged in.");
    }, [user]);
    return(

       <header className="navbar">

    <div className="container navbar-container">

        <h2 className="logo">
            Deli<span>serve</span>
        </h2>

        <div className="search-box">

            <input
                type="text"
                placeholder="Search restaurants or food..."
            />

        </div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

            <Link to="/">Home</Link>
            <Link to="/">Become Partner</Link>
            {user ? (
                <>
                    <span style={{fontSize:"10px", color:"var(--color-primary)"}}> Welcome <br></br>{user.user_metadata.full_name}</span>
                    <button onClick={signOutUser}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>

        <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
        >
            ☰
        </button>

    </div>

</header>

    )

}

export default Navbar;