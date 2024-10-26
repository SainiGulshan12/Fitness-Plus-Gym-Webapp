import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">  
            <img src={logo} alt="Fitness Plus Gym logo"/>
            {/* Toggle Icon */}
            <div id='mobmenu' onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBarsStaggered} className='i-fa' />
            </div>
            
            {/* Menu Links */}
            <div className={`ul ${isMobileMenuOpen ? 'show' : ''}`}>
                <Link activeClass='active' to='home' spy={true} duration={500} className='li'>Home</Link>
                <Link activeClass='active' to='feeStructure' spy={true} duration={500} className='li'>Membership</Link>
                <Link activeClass='active' to='workout' spy={true} duration={500} className='li'>Workouts</Link>
                <Link activeClass='active' to='about' spy={true} duration={500} className='li'>About</Link>
                <Link activeClass='active' to='contact' spy={true} duration={500} className='li'>Contact Us</Link>
            </div>
            
            <Link to='contact' className='joinbtn2'>Join Now</Link>
        </nav>
    );
};

export default Navbar;
