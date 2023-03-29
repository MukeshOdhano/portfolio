import React from 'react'

import "./HomeFooter.css"

import footerSvg from '../../../assets/Home/footer.svg'

export default function HomeFooter() {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={footerSvg}/>
      </div>
    </div>
  )
}
