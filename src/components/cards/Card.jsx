import React from 'react';

//Styles
import './Card.css'

function Card({children,width, height, links, page, setPage}) {
  return (
    <div className='Card' style={{width: width, height: height}}>
      { links ? 
        <div className='Links'>
          {page !== 'presentation' && <div className='Link' onClick={ e => setPage('presentation')}>About Me</div> }
          {page !== 'work' && <div className='Link' onClick={ e => setPage('work')}>Work Exp</div> }
          {/* {page !== 'academic' && <div className='Link' onClick={ e => setPage('academic')}>Academic Exp</div> } */}
          {page !== 'portfolio' && <div className='Link' onClick={ e => setPage('portfolio')}>Portfolio</div> }
        </div>
      : null
      }
      {children}
    </div>
  )
}


export default Card;