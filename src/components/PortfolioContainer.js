import React from 'react'
import { TOTAL_SCRN } from '../utils/CommanUtil'

export default function PortfolioContainer() {
   const mapAScreen = () => {
      return TOTAL_SCRN.map(screen => (
            screen.component ? (
            <screen.component 
               screenName={screen.screen_Name}
               key={screen.screen_Name} 
               id={screen.screen_Name} 
            /> 
            ) : ( 
               <div key={screen.screen_Name} ></div>
            )
         ))
      
   }
  return (
   <div className='portfolio-Container'>
      {mapAScreen()}
   </div>
  )
}
