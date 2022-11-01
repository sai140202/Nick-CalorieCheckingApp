import React from 'react'
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

const Feature = () => {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="weightlifting" content="The reason I exercise is for the quality of life I enjoy"/>
            <Featurebox image={fimage2} title="Specific muscle" content="Happiness lies, first of all, in health"/>
            <Featurebox image={fimage3} title="Flex Your Muscle" content="Prevention is better than cure."/>
            <Featurebox image={fimage4} title="Cardio Excercise"content="Take care of your body. It’s the only place you have to live"/>
        </div>
    </div>
  )
}

export default Feature