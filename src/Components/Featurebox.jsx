import React from 'react'

const Featurebox = (props) => {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt=''></img>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Featurebox