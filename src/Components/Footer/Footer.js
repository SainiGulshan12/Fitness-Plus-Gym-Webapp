import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <div className="button">
                    <div className="icon"><a href="#"><FaInstagram className='i' /></a></div>
                    <button><span>Instagram</span></button>
                </div>
                <div className="button">
                    <div className="icon"><a href="#"><FaFacebook className='i' /></a></div>
                    <button><span>Facebook</span></button>
                </div>
                <div className="button">
                    <div className="icon"><a href="#"><FaTwitter className='i' /></a></div>
                    <button><span>Twitter</span></button>
                </div>
                <div className="button">
                    <div className="icon"><a href="#"><FaWhatsapp className='i' /></a></div>
                    <button><span>Whatsapp</span></button>
                </div>
                <div className="button">
                    <div className="icon"><a href="#"><FaYoutube className='i' /></a></div>
                    <button><span>Youtube</span></button>
                </div>
            </div>
            <p>Copyright &#169; 2024 <b>Gulshan Saini</b>. All right received </p>
        </footer>
    )
}
export default Footer;