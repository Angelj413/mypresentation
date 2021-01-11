import React,  { useState } from 'react';
import '../assets/css/HomePage.css'
//Components
import Presentation from '../components/presentation/Presentation'
import Work from '../components/work/Work'
import Portfolio from '../components/portfolio/Portfolio'
import Skills from '../components/skills/Skills'


const HomePage = () => {
  const [page, setPage] = useState('presentation')
  
  const handlePage = page => {
    switch (page) {
      case 'presentation':
        return (<Presentation 
                page = {page}
                setPage = {setPage}
                />)
      case 'work':
        return (<Work 
                page = {page}
                setPage = {setPage}
                />)
      case 'portfolio':
        return (<Portfolio 
                page = {page}
                setPage = {setPage}
                />)
      case 'skills':
        return (<Skills 
                page = {page}
                setPage = {setPage}
                />)
      default:
        return (<div></div>)
    }
  }

  return (
    <div className='HomePage'>
      {
        handlePage(page)
      }
    </div>
  )
}


export default HomePage;