import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <section id='home' class='home'>
      <div class='compass_grid'>
        <div></div>
        <img src='/home/interactive_radial_pattern.svg' width='650px'/>
        <div></div>
      </div>
      <div class='home_heading'>HACKERZSTREET</div>
      <div class='home_subheading'>A 24-HOUR FLAGSHIP HACKATHON</div>
      <div class='home_subheading'>BY IEEE CS MUJ</div>
      <div class='home_grid'>
        <div class='home_left'>
          <div class='left_1'>3.0</div>
          <div class='left_2'>Hackerzstreet 3.0, set to ignite creativity and innovation - an intense 24-hour coding marathon packed with excitement and collaboration. This event features a single round where participants delve into diverse technical themes, each presenting unique challenges and opportunities.</div>
          <div class='left_3'>
            <div class='left_3_1'>
              <div>Want to know more?</div>
              <p>Scroll to find out!</p>
            </div>
            <div class='left_3_2'>
              <a href='#schedule'><img src='/home/home_down_arrow.svg' width={15} /></a>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div class='home_right'>
          <div class='right_1'>
            <div>60K</div>
            <p>PRIZE POOL</p>
          </div>
          <div class='right_2'>
            <div class="fraction">
              <div class='numerator_wrapper'>
                <div class="numerator">12</div>
                <p class="numerator">-</p>
              </div>
              <hr></hr>
              <div class='denominator_wrapper'>
                <p class="denominator">-</p>
                <div class="denominator">13</div>
              </div>
            </div>
            <div class="right_date">APRIL 2025</div>
          </div>
          <div class='right_3'>
            <div><a href='https://www.instagram.com/ieee_csmuj/'><img src='/social_media/instagram.svg'/></a></div>
            <div><a href='https://www.linkedin.com/company/ieee-cs-muj'><img src='/social_media/linkedin.svg'/></a></div>
            <div><a href='https://medium.com/@ieeecs'><img src='/social_media/medium.svg'/></a></div>
            <div><a href='https://x.com/ieeecsmuj'><img src='/social_media/twitter.svg'/></a></div>
          </div>
        </div>
      </div>
    </section>
  )
}
