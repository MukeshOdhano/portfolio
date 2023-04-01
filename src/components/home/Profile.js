import React, { useRef, useEffect } from 'react';

import './Profile.css'

import { Twitter, GitHub, Instagram, Facebook } from '@mui/icons-material'
import { Button } from '@mui/material';
import Typed from 'typed.js';

import profilePic  from '../../assets/Home/profilePic.png'



import HomeFooter from './footer/HomeFooter';




export default function Profile() {


   // Type Animation of heading one
   const h1Ref = useRef(null);
   useEffect(() => {
      const h1_Options = {
        strings: ['Devloper', 'Designer'],
        typeSpeed: 75,
        backSpeed: 75,
        loop: true,
      };
    
      const typed = new Typed(h1Ref.current, h1_Options);
    
      return () => {
        typed.destroy();
      };
   }, []);
    


  return (
   <>
      <div className='Profile-Container'>
         <div className='background-blob'/>
         <div className={`Profile_Parents`}>
            <div className={`profile_Details`}>
               <div className='colz'>
                  <div className='colz-icon'>

                     <a href='https://www.facebook.com/MukeshOdhano/'>
                        <Facebook className={`icon`} />
                     </a>
                     <a href='https://www.instagram.com/mukeshodhano22/'>
                        <Instagram className={`icon`}/>
                     </a>
                     <a href='https://github.com/Mukesh-SE'>
                        <GitHub className={`icon`}/>
                     </a>
                     <a href='https://twitter.com/2022Mukeshkumar'>
                        <Twitter className={`icon`}/>
                     </a>
                     <a href='https://github.com/MukeshOdhano'>
                        <GitHub className={`icon`}/>
                     </a>
                  </div>
               </div>
               
               <div className={`Profile-details-name`}>
                  <span className={`name`}>Hello, I'm </span>
                  <span className={`name`}>Mukesh Kumar</span>
               </div>

               <div className='Profile-details-role'>
                  <h1>Web~
                     <span 
                     className={`anime`} 
                     ref={h1Ref} />
                  </h1>
                  <span className={` profile-role-tagline`}>
                     Bringing designs to life with code
                  </span>
               </div>

               <div className='profile-role-option'>
                  <Button 
                     className='btn' 
                     variant="contained"
                     size='medium'
                     href='#'
                     >Hire Me
                  </Button>
                  <Button 
                  className='btn btn-bold'
                     variant='outlined'
                     size='medium' 
                     href='files/resume.pdf' 
                     download='resume.pdf'
                  >Get Resume
                  </Button>
               </div>
            </div>

         <div className='prof-pic'>
            <div className='prof-pic-bg'></div>
         </div>
         </div>
      </div>
      <HomeFooter />
   </>
  )
}
