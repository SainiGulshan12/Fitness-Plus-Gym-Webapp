import React from 'react';
import './Contact.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className="contact section " id="contact">
        <div className="conhead">
            <h1>Contact <span>Us</span></h1><br />
        </div>
        <div className="contact-info">
            <div className="submitform">
                <form >
                    <input type="text" placeholder="Name" />
                    <input type="number" placeholder="Mobile Number" />
                    <input type="email" placeholder="Email" />
                    <textarea rows={5} cols={5} placeholder='Your Message'></textarea>
                    <Link to='submit' spy={true}  duration={500} ><button className='subbtn'>Register here</button></Link>
                </form>
            </div>
            <div className="gym-info">
                <div className="icons">
                  <FontAwesomeIcon icon={faClock} className='i i-clo' />
                  <FontAwesomeIcon icon={faEnvelope} className='i i-enve' />
                  <FontAwesomeIcon icon={faLocationDot} className='i i-loc' />
                </div>
                <div className="info">
                  <h4 className='day'>Monday - Friday</h4>
                  <h5 className="timing">6:00Am - 11:00Am</h5>
                  <h4 className="">Saturday - Sunday</h4>
                  <h5 className="timing">5:00Pm - 9:00Pm</h5>
                  <h4 className="email">fitnessplus295@gmail.com</h4>
                  <h4 className="address">1145/Plot No.47, Ram Vihar Colony, Delhi</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;