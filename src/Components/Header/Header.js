import React from 'react';
import logo from'../../images/Logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
           <nav>
               <a href="#home">Home</a>
               <a href="#buy-course">Buy Course</a>
               <a href="#for-student">For Students</a>
               <a href="#tech-on">Teach On</a>
               <input type="text" placeholder="Search.."/>
           </nav>
        </div>
    );
};

export default Header;