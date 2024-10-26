import React from 'react';
import './Submit.css';
import { FaEnvelope, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Submit = () => {
  return (
    <div className="container" id='submit'>
        <p className='para1'><FaEnvelope className='i-enve'/></p>
        <h1>Thanks for Submitting </h1>
        <p className='para2'>Your message has been sent</p>
        <p className='para3'><FaThumbsUp className='i-thumb'/></p>
        <Link to='home' className='gohome'>Go to Home</Link>   
    </div>
  )
}

export default Submit;