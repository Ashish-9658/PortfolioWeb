
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <nav className="portfolio-navbar">

            <a href="#home" className="logo" onClick={closeMenu}>
                My<span>Portfolio.</span>
            </a>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                <a href="#home" onClick={closeMenu}>Home</a>

                <a href="#about" onClick={closeMenu}>About</a>

                <a href="#skills" onClick={closeMenu}>Skills</a>

                <a href="#projects" onClick={closeMenu}>Projects</a>

                <a href="#education" onClick={closeMenu}>Education</a>

                <a href="#contact" onClick={closeMenu}>Contact</a>

            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

        </nav>

    );
}

export default Navbar;
