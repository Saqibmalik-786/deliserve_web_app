import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar(){

    const [menuOpen,setMenuOpen]=useState(false);

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
            <Link to="/login">Login</Link>

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