import React from 'react';
import './About.css';
import aboutimg from '../../images/Aboutpage.png';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="abhead">
            <h1>About <span>Us</span></h1><br />
        </div>
        <div className="about-container">
          <div className="about-img">
            <img src={aboutimg} alt="logo" />
          </div>
          <div className="aboutus">
            <h1 className="uhead1">Why Choose</h1>
            <h1 className="uhead2">Us?</h1>
            <p className="abpara1">Lorem ipsum dolor sit amet, consectetur adipisicing elit Accusantium repellendus possimus beatae rem distinctio voluptas commodi atque eveniet vitae nobis!</p>
            <p className="abpara2">Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
            <p className="abpara3">Lorem ipsum dolor sit amet.</p>
            <p className="abpara4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nostrum.</p>
            <Link to='contact' spy={true} duration={500} className='fclassbtn1'>Book a Free Class</Link>
          </div>
        </div>
    </section>
  )
}

export default About;