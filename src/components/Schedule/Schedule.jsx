import React from 'react'
import './Schedule.css'

export default function Schedule() {
  return (
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

            <div><img class='schedule_arrow' src="/schedule/connector_line.svg" alt="arrow"/></div>

            <div class='schedule_details'>
              <div class='timmings'>12:00 PM</div>
              <p>Participants are provided with refreshments.</p>
            </div>

            <div><img class='schedule_arrow' src="/schedule/connector_line.svg" alt="arrow"/></div>
          
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

            <div><img class='schedule_arrow' src="/schedule/connector_line_reverse.svg" alt="arrow"/></div>

            <div class='schedule_details'>
              <div class='timmings'>10:00 PM</div>
              <p>Round 1 officially ends and the submission link is closed.</p>
            </div>

            <div><img class='schedule_arrow' src="/schedule/connector_line_reverse.svg" alt="arrow"/></div>
          
            <div class='schedule_details'>
              <div class='timmings'>6:00 PM</div>
              <p>Mentorship round 2 begins.</p>
            </div>

            <div class='nextline_arrow'>
              <img class='schedule_arrow' src="/schedule/connector_line_turn.svg" alt="arrow"/>
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

            <div><img class='schedule_arrow' src="/schedule/connector_line.svg" alt="arrow"/></div>

            <div class='schedule_details'>
              <div class='timmings'>11:00 AM</div>
              <p>Round 2 starts.</p>
            </div>

            <div><img class='schedule_arrow' src="/schedule/connector_line.svg" alt="arrow"/></div>
          
            <div class='schedule_details'>
              <div class='timmings'>2:00 PM</div>
              <p>Round 2 ends.</p>
            </div>
          </div>

        </article>

      </div>
    </section>
  )
}
