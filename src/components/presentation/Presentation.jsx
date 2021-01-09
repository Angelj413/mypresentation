import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import ProfileImg from '../../assets/images/AngelSinFondo.png'
import Footer from '../footer/Footer'


//Components
import Card from '../cards/Card'

function Presentation({page, setPage}) {
  return (
      <Card
        width = {'75%'}
        height = {'90%'}
        links = {true}
        setPage = {setPage}
        page = {page}
      >
        <div className='ContentPresentation'>
          <div className='Information'>
            <div className='Title'>
              <p className='TitleP'><span className='Hello'>Hello! </span>I'm <span className='Name'>Angel Morante</span></p>
              <p className='Subtitle'> FullStack Web <span>Developer</span></p>
            </div>
            <div className='Description'>
              <p className='Description-1'>
              I am a Full Stack web developer. With a good knowledge of Javascript. I am also a Python Developer, interested in Machine Learning and Data Science. Although I do not like to lock myself in a single technology, I can adapt!
              <br/>
                I like spending my time making music and watching series, but especially praising God for my wife's company.
              </p>
              <p className='Description-2'>MOTIVATION</p>
              <p className='Description-1'>
                Show that the vast majority of humanity's current challenges and problems can be efficiently solved with the help of software. And I plan to be part of that.
              </p>
              <p className='Firma'>Angel Morante</p>
              <a href="mailto:morante413@gmail.com" style={ { textDecoration: 'none'} }>
                <div className='Contact'>
                  Contact me
                </div>
              </a>
              <div className='IconsContact'>
              <a href='https://www.linkedin.com/in/angel-jes%C3%BAs-morante-3a815b125/' target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
              <a href='https://github.com/Angelj413' target='_blank' rel="noopener noreferrer"><FaGithub/></a>
              <a href='https://gitlab.com/Angelj413' target='_blank' rel="noopener noreferrer"><FaGitlab/></a>
              <a href='https://www.instagram.com/angelj828/' target='_blank' rel="noopener noreferrer"><FaInstagram/></a>
              <a href='https://www.facebook.com/profile.php?id=1135641240' target='_blank' rel="noopener noreferrer"><FaFacebook /></a>
              <a href='https://twitter.com/Amorante413' target='_blank' rel="noopener noreferrer"><FaTwitter/></a>
              </div>
            </div>
          </div>
          <div className='ImgProfile'>
            <img src={ProfileImg} alt='My Profile Pic'/>
          </div>
        </div>
        <Footer/>
      </Card>
  )
}


export default Presentation;