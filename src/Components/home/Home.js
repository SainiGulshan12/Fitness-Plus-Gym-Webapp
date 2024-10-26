import React from 'react';
import './Home.css';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home-info">
            <h1>No Pain - Only Gain</h1>
            <h1>Build Dream body</h1>
            <h3>Natural Fitness !</h3>
            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, cumque!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto! Lorem.</p>
            <Link to='about' spy={true} duration={500} className='joinbtn2'>More About Us</Link>
        </div>
    </section>
  )
}

export default Home;