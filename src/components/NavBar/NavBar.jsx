import React, { useContext, useRef, useState } from 'react';
import "./Navbar.css";
import {assets} from '../../assets/assets';
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const NavBar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    return (
        <div className='navBar'>

            <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>

            <ul className='navBar-menu'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile App</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>
            </ul>

            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className='dot'></div>
                </div>
                <button className='sign-in-btn' onClick={()=>setShowLogin(true)}>sign in</button>
            </div>

        </div>
    )
}

export default NavBar
