import { Link } from "react-router-dom"
import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="#" className="site-title">Fight Cage</a>
            <ul className="links">
                <Link to='/services'>Services</Link>
                <Link to='/testimonials'>Testimonials</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/calculate'>Fight News</Link>
            </ul>
        </nav>
    )
}

export default Navbar