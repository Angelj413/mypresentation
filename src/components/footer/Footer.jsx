import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

function Footer({page, setPage}) {
  return (
        <div className='FootPresentation'>
          <p className='FinalNote-1'>
            מיוצר עם הלב מאת אנג'ל  
          </p>
          <div className='FootIcons'>
            <a href='https://www.linkedin.com/in/angel-jes%C3%BAs-morante-3a815b125/' target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
            <a href='https://github.com/Angelj413' target='_blank' rel="noopener noreferrer"><FaGithub/></a>
            <a href='https://gitlab.com/Angelj413' target='_blank' rel="noopener noreferrer"><FaGitlab/></a>
            <a href='https://www.instagram.com/angelj828/' target='_blank' rel="noopener noreferrer"><FaInstagram/></a>
            <a href='https://www.facebook.com/profile.php?id=1135641240' target='_blank' rel="noopener noreferrer"><FaFacebook /></a>
            <a href='https://twitter.com/Amorante413' target='_blank' rel="noopener noreferrer"><FaTwitter/></a>
          </div>
        </div>
  )
}


export default Footer;