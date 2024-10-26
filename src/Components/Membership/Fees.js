import React from 'react'
import './Fees.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FaCheckCircle } from 'react-icons/fa';

const Fees = () => {
    return (
        <section className="fees section" id="feeStructure">
            <div className="plan">
                <h1>Our <span>Plans</span></h1><br />
            </div>
            <div className="fees-container">
                <div className="pricing row1">
                    <p><FontAwesomeIcon icon={faLayerGroup} className='i' /></p>
                    <h3 className="head3">Basic Plan</h3>
                    <h2 className="head2">1 Month in <span>&#8377;</span>1000</h2>
                    <div className="plan-para">
                        <p><FaCheckCircle className='i-check' />No personal Trainer</p>
                        <p><FaCheckCircle className='i-check' />valid for 30 days</p>
                        <p><FaCheckCircle className='i-check' />No Cardio Only WorkOut</p>
                        <p><FaCheckCircle className='i-check' />Lorem, ipsum Lorem.</p>
                        <p><FaCheckCircle className='i-check' />Lorem, ipsum Lorem.</p>
                    </div>
                    <button className="buybtn">Buy Plan</button>
                </div>
                <div className="pricing row2">
                    <p><FontAwesomeIcon icon={faLayerGroup} className='i' /></p>
                    <h3 className="head3 ">Pro Plan</h3>
                    <h2 className="head2">3 Month in <span>&#8377;</span>2800</h2>
                    <div className="plan-para">
                        <p><FaCheckCircle className='i-check' />No personal Trainer</p>
                        <p><FaCheckCircle className='i-check' />valid for 90 days</p>
                        <p><FaCheckCircle className='i-check' />WorkOut & Cardio</p>
                        <p><FaCheckCircle className='i-check' />Lorem, ipsum Lorem.</p>
                        <p><FaCheckCircle className='i-check' />Lorem, ipsum Lorem.</p> 
                    </div>
                    <button className="buybtn">Buy Plan</button>
                </div>
                <div className="pricing row3">
                    <p><FontAwesomeIcon icon={faLayerGroup} className='i' /></p>
                    <h3 className="head3">Premium Plan</h3>
                    <h2 className="head2">6 Month in <span>&#8377;</span>5600</h2>
                    <div className="plan-para">
                        <p><FaCheckCircle className='i-check' />Personal Trainer</p>
                        <p><FaCheckCircle className='i-check' />valid for 180 days</p>
                        <p><FaCheckCircle className='i-check' />Workout & Cardio</p>
                        <p><FaCheckCircle className='i-check' />Lorem, ipsum Lorem.</p>
                        <p><FaCheckCircle className='i-check' />Lorem, ipsum Lorem.</p>
                    </div>
                    <button className="buybtn">Buy Plan</button>
                </div>
            </div>
        </section>
    )
}

export default Fees