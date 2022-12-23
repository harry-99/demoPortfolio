import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='nav'>
            <span className='name'>Harry Hercules</span>
            <span className='nav-contents'>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to="/home"><li>Home</li></Link>
                    <Link style={{ textDecoration: 'none' }} to="/projects"><li>Projects</li></Link>
                    <Link style={{ textDecoration: 'none' }} to="/about"><li>About</li></Link>
                    <Link style={{ textDecoration: 'none' }} to="/contact"><li>Contact</li></Link>
                </ul>
            </span >
        </div >
    )
}

export default Navbar
