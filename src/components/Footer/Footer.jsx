import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>

            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi inventore quidem iste dolorum mollitia, possimus nemo animi facilis sed non eius exercitationem eligendi et repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum itaque similique, laudantium sapiente eveniet non.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" className='.footer-social-icons'/>
                        <img src={assets.twitter_icon} alt="" className='.footer-social-icons'/>
                        <img src={assets.linkedin_icon} alt="" className='.footer-social-icons'/>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 9999999999</li>
                        <li>abc@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 &#169; Tomato.com - All rights reserved
            </p>
        </div>
    );
}

export default Footer
