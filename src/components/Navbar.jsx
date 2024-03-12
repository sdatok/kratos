import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="flex justify-start items-center pl-10"> {/* Add padding left for alignment and remove mx-auto if necessary */}
                <Link to="/" className="Navbar-link"> <code>/Home</code></Link>
                <Link to="/about" className="Navbar-link"><code>/About</code></Link>
                <Link to="/projects" className="Navbar-link"><code>/Projects</code></Link>
                <Link to="/contact" className="Navbar-link"><code>/Contact</code></Link>
            </div>
        </nav>
    );
};

export default Navbar;
