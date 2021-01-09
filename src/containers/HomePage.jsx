import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import '../assets/css/HomePage.css'
import ProfileImg from '../assets/images/AngelSinFondo.png'

//Components
import Card from '../components/cards/Card'

function HomePage() {
  return (
    <div className='HomePage'>
      <Card
        width = {'75%'}
        height = {'90%'}
        links = {true}
      >
        <div className='ContentPresentation'>
          <div className='Information'>
            <div className='Title'>
              <p className='TitleP'><span className='Hello'>Hello! </span>I'm <span className='Name'>Angel Morante</span></p>
              <p className='Subtitle'> FullStack Web <span>Developer</span></p>
            </div>
            <div className='Description'>
              <p className='Description-1'>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, con software de autoedición, 
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
              </p>
              <p className='Description-2'>MOTIVATION</p>
              <p className='Description-1'>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
              </p>
              <p className='Firma'>Angel Morante</p>
              <div className='Contact'>
                Contact me
              </div>
              <div className='IconsContact'>
                <FaLinkedin/>
                <FaGithub/>
                <FaGitlab/>
                <FaInstagram/>
                <FaFacebook />
                <FaTwitter/>
              </div>
            </div>
          </div>
          <div className='ImgProfile'>
            <img src={ProfileImg}/>
          </div>
        </div>
        <div className='FootPresentation'>
          <p className='FinalNote-1'>
            מיוצר עם הלב מאת אנג'ל  
          </p>
          <div className='FootIcons'>
            <FaLinkedin/>
            <FaGithub/>
            <FaGitlab/>
            <FaInstagram/>
            <FaFacebook />
            <FaTwitter/>
          </div>
        </div>
      </Card>
    </div>
  )
}


export default HomePage;