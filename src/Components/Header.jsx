import React from 'react'
import '../index.css'

const Header = () => {
  return (
    <div id = 'main'>
        <div className='name'>
            <h2>STEP UP YOUR</h2>
            <h1><span>FITNESS</span> WITH US</h1>
            <p className='details'>Maintain Your Body And Fitness With
             Professional Service</p>
             <div className='header-btns'>
              <a href='Pedometer.rar' download='' >
                <button value='download'className='header-btn'>INSTALL NOW</button></a>
             </div>
        </div>
    </div>
  )
}

export default Header