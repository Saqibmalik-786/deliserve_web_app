import "./Navbar.css";
import { useState } from "react";

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

            <a href="/">Home</a>
            <a href="/">Become Partner</a>
            <a href="/">Login</a>

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