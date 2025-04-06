import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer id='contact'>
      <div class='footer_logo'>
        <img src='/footer/footer_logo.svg'/>
        <div>/</div>
        <img src='/footer/ieee_main_logo_large.svg'/>
      </div>
      <div class='footer_contacts'>
        <div>
          <span>Rishi Joshi</span>
          <a href='tel:+919569913103'><p>+91 95699 13103</p></a>
          <p>Chairperson</p>
        </div>
        <div>
          <span>Pranav Bhardwaj</span>
          <a href='tel:+919999558266'><p>+91 99995 58266</p></a>
          <p>Vice-Chairperson</p>
        </div>
        <div>
          <span>Mohit Hingorani</span>
          <a href='tel:+919811033533'><p>+91 98110 33533</p></a>
          <p>General Secretary</p>
        </div>
      </div>
      <div class='social_media'>
        <div class='links'>
          <a href='https://cs.ieeemuj.com/'><img src='/social_media/globe.svg'/></a>
          <a href='https://cs.ieeemuj.com/'>https://cs.ieeemuj.com/</a>
        </div>
        <div class='media_icons'>
          <a href='https://www.instagram.com/ieee_csmuj/'><img src='/social_media/instagram.svg'/></a>
          <a href='https://www.linkedin.com/company/ieee-cs-muj'><img src='/social_media/linkedin.svg'/></a>
          <a href='https://medium.com/@ieeecs'><img src='/social_media/medium.svg'/></a>
          <a href='https://x.com/ieeecsmuj'><img src='/social_media/twitter.svg'/></a>
        </div>
        <div class='tagline'>Made with 💛 by IEEE CS MUJ</div>
      </div>
    </footer>
  )
}
