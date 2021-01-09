import React from 'react';

//Styles
import './Card.css'

function Card({children,width, height, links}) {
  return (
    <div className='Card' style={{width: width, height: height}}>
      { links ? 
        <div className='Links'>
          <div className='Link'>Work Exp</div>
          <div className='Link'>Academic Exp</div>
          <div className='Link'>Briefcase</div>
        </div>
      : null
      }
      {children}
    </div>
  )
}


export default Card;