import React from 'react';
import './about.css';
import imageAbout from '../../media/IMG_1405.jpg';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>HOLA HOLA</h3>
            <p>Lorem ipsum</p>
        </div>
        <div className='about-img'>
            <img src={imageAbout} alt=''></img>
        </div>
    </div>
  )
}

export default About;