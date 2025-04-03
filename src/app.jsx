import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div class="logo-container">
          <img src="/ieee_main_logo.svg" alt="IEEE CS Logo"/>
        </div>
        <nav>
          <ul>
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#tracks">Tracks</a></li>
            <li><a href="#about_us">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="register-button">
          <a href="#">REGISTER</a>
        </div>
      </header>

      <section id='home' class='home'>
        <div class='compass_grid'>
          <div></div>
          <img src='/interactive_radial_pattern.svg' width='650px'/>
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
                <a href='#schedule'><img src='/home_down_arrow.svg' width={15} /></a>
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

      <section class='sponsors'>
        <div><img src='/sponsors_logo/hp_logo.svg' alt="HP Logo"></img></div>
        <div><img src='/sponsors_logo/monster_logo.svg' alt="Monster Energy Logo"></img></div>
        <div><img src='/sponsors_logo/book_my_show_logo.svg' alt="Book my Show Logo"></img></div>
        <div><img src='/sponsors_logo/unstop_logo.svg' alt="Unstop Logo"></img></div>
        <div><img src='/sponsors_logo/gfg_logo.svg' alt="GFG Logo"></img></div>
        <div><img src='/sponsors_logo/tribeVibe_logo.svg' alt="Tribe Vibe Logo"></img></div>
        <div><img src='/sponsors_logo/stepNex_logo.svg' alt="StepNex Technologies Logo"></img></div>
      </section>

      <section id='schedule' class='schedule'>
        <h1>SCHEDULE</h1>
        
        <div class="schedule_container">
          <h2>Elevate your skills and collaborate with fellow coders!</h2>
          
          <article class='roadmap'>
            <p class='schedule_heading'>Round 1</p>
            <div class='roadmap_part-1'>

              <div class='date_container'>
                <div class='date'>12</div>
                <div class='month'>April</div>
              </div>

              <div class='schedule_details'>
                <div class='timmings'>11:00 AM</div>
                <p>Problem statements are released at the website and the hackathon begins.</p>
              </div>

              <div><img class='schedule_arrow' src="/connector_line.svg" alt="arrow"/></div>

              <div class='schedule_details'>
                <div class='timmings'>12:00 PM</div>
                <p>Participants are provided with refreshments.</p>
              </div>

              <div><img class='schedule_arrow' src="/connector_line.svg" alt="arrow"/></div>
             
              <div class='schedule_details'>
                <div class='timmings'>3:00 PM</div>
                <p>Mentorship round 1 begins.</p>
              </div>
            </div>

            <div class='roadmap_part-2'>

              <div class='schedule_details'>
                <div class='timmings'>12:00 AM</div>
                <p>Round 1 results are announced.</p>
              </div>

              <div><img class='schedule_arrow' src="/connector_line_reverse.svg" alt="arrow"/></div>

              <div class='schedule_details'>
                <div class='timmings'>10:00 PM</div>
                <p>Round 1 officially ends and the submission link is closed.</p>
              </div>

              <div><img class='schedule_arrow' src="/connector_line_reverse.svg" alt="arrow"/></div>
             
              <div class='schedule_details'>
                <div class='timmings'>6:00 PM</div>
                <p>Mentorship round 2 begins.</p>
              </div>

              <div class='nextline_arrow'>
                <img class='schedule_arrow' src="/connector_line_turn.svg" alt="arrow"/>
                <div></div>
              </div>
              
            </div>

            <p class='schedule_heading'>Round 2</p>
            <div class='roadmap_part-3'>

              <div class='date_container'>
                <div class='date'>13</div>
                <div class='month'>April</div>
              </div>

              <div class='schedule_details'>
                <div class='timmings'>10:00 AM</div>
                <p>Participants report to the venue given.</p>
              </div>

              <div><img class='schedule_arrow' src="/connector_line.svg" alt="arrow"/></div>

              <div class='schedule_details'>
                <div class='timmings'>11:00 AM</div>
                <p>Round 2 starts.</p>
              </div>

              <div><img class='schedule_arrow' src="/connector_line.svg" alt="arrow"/></div>
             
              <div class='schedule_details'>
                <div class='timmings'>2:00 PM</div>
                <p>Round 2 ends.</p>
              </div>
            </div>

          </article>

        </div>
      </section>

      <article id='tracks' class='article-background'>
        <h1>TRACKS</h1>
        
        <div class="track_container">
          <h2>Choose any one from the following themes for your project</h2>
          
          <div class="track_grid">

            <div class="track_item">
              <img src="/tracks_logo_4.svg" alt="FinTech" width="100" height="100"></img>
              <div class="hidden"><p class="track_subject">FinTech</p>Innovate in financial services with secure, scalable, and user-friendly solutions.</div>
            </div>

            <div class="track_item">
              <img src="/tracks_logo_6.svg" alt="Healthcare" width="100" height="100"></img>
              <div class="hidden"><p class="track_subject">Healthcare</p>Develop solutions to enhance patient care, diagnostics, and medical accessibility.</div>
            </div>

            <div class="track_item">
              <img src="/tracks_logo_5.svg" alt="EdTech" width="100" height="100"></img>
              <div class="hidden"><p class="track_subject">EdTech</p>Transform learning experiences through technology-driven educational advancements.</div>
            </div>

            <div class="track_item">
              <img src="/tracks_logo_1.svg" alt="Blockchain" width="100" height="100"></img>
              <div class="hidden"><p class="track_subject">Blockchain</p>Leverage decentralized technologies for transparency, security, and trust.</div>
            </div>

            <div class="track_item">
              <img src="/tracks_logo_2.svg" alt="Environmental Impact" width="100" height="100"></img>
              <div class="hidden"><p class="track_subject">Environmental Impact</p>Build tech-driven solutions to tackle sustainability and climate challenges.</div>
            </div>

            <div class="track_item">
              <img src="/tracks_logo_3.svg" alt="Networking and Communication" width="100" height="100"></img>
              <div class="hidden"><p class="track_subject">Networking and Communication</p>Enhance global connectivity through efficient and seamless communication systems.</div>
            </div>

          </div>
        </div>
      </article>

      <div id='about_us' class="about_us">
        <div class="about_header">
          <h1>ABOUT US</h1>
          <h2>IEEE COMPUTER SOCIETY MUJ</h2>
        </div>
        <div class="about_container">

          <div className='about_sub_container'>
            <div class="about_logo">
              <img class='yellow' src="/ieee_yellow_logo.svg" height='450px' alt="IEEE CS Logo"/>
              <img class='white' src="/ieee_white_logo.svg" height='450px' alt="IEEE CS Logo"/>
            </div>

            <div class='about_details'>
              <div class="cs-text"><div>CS</div></div>
              <hr></hr>
              <div class="about_text">
                <p>
                    Serving computing at its best with inclusion and diversity is the prime motto of the IEEE Computer Society. The society was created keeping in mind IEEE's continued commitment to providing options at best. The IEEE Computer Society is driven by the central goals of equity, diversity, inclusion, and yearn to serve computing at its perfection. With an intent to expand the IEEE's reach and learnings, this society was started a year back in early 2020. Since then, it has tried every possible course of action by conducting diverse events such as webinars, competitions, workshops, and mentoring programs to set a goal for the young achievers.
                </p>
                <p>
                    The members of IEEE CS have been skilled and earned minimal expertise in roughly all possible sub-sections of CS via our accelerator program. The senior student members steer them on each stage they take and deliver them with the professional material for further reference. We aim to proactively support diversity and inclusion by being the premier source for information, inspiration, and collaboration in computer science and engineering. Connecting members on campus, this IEEE Computer Society empowers the students who wish to advance in technology by delivering tools at all stages of their professional careers. “Computer science is the operating system for all innovations.” At IEEE CS, we look at it similarly, trying to make a better world by working as a team.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <footer id='contact'>
        <div class='footer_logo'>
          <img src='/footer_logo.svg'/>
          <div>/</div>
          <img src='/ieee_main_logo_large.svg'/>
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

    </>
  )
}

export default App
