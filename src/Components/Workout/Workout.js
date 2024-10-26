import './Workout.css';
import Aos from 'aos';          //animation on scroll
import 'aos/dist/aos.css';
import workout1 from '../../images/workout1.png';
import workout2 from '../../images/workout2.png';
import workout3 from '../../images/workout3.png';
import workout4 from '../../images/workout4.png';
import workout5 from '../../images/workout5.png';
import workout6 from '../../images/workout6.png';
import React, { useEffect } from 'react';


const Workout = () => {
        useEffect(()=>{
            Aos.init({duration:2000});          /* 2000 = 2s */
        })       
    return (
        <section className="workout section" id="workout">
            <div className="workplan">
                <h1>Our <span>Workouts</span></h1><br />
                <h3>What We Provide</h3>
            </div>
            <div className="workimages">
                    <img data-aos="zoom-in" data-aos-delay="200" src={workout1} alt="workoutImage" />    {/* 200 = 0.2s */}
                    <img data-aos="zoom-in" data-aos-delay="200" src={workout2} alt="workoutImage" />
                    <img data-aos="zoom-in" data-aos-delay="200" src={workout3} alt="workoutImage" />
                    <img data-aos="fade-up" data-aos-delay="200" src={workout4} alt="workoutImage" />
                    <img data-aos="fade-up" data-aos-delay="200" src={workout5} alt="workoutImage" />
                    <img data-aos="fade-up" data-aos-delay="200" src={workout6} alt="workoutImage" />
            </div>
        </section>
    );
};

export default Workout;