import React from 'react'
import aboutimage from '../images/about.png'
import '../index.css'


const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text' >
        <h1 >
            LEARN MORE ABOUT US
        </h1>
        <p>  We develop an application that help to calculate your calorie and maintain your health.
</p>
<button>READ MORE</button>
    </div>
    </div>
  )
}

export default About