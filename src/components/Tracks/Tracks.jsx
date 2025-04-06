import React from 'react'
import './Tracks.css'

export default function Tracks() {
  return (
    <article id='tracks' class='article-background'>
      <h1>TRACKS</h1>
      
      <div class="track_container">
        <h2>Choose any one from the following themes for your project</h2>
        
        <div class="track_grid">

          <div class="track_item">
            <img src="/tracks/tracks_logo_4.svg" alt="FinTech" width="100" height="100"></img>
            <div class="hidden"><p class="track_subject">FinTech</p>Innovate in financial services with secure, scalable, and user-friendly solutions.</div>
          </div>

          <div class="track_item">
            <img src="/tracks/tracks_logo_6.svg" alt="Healthcare" width="100" height="100"></img>
            <div class="hidden"><p class="track_subject">Healthcare</p>Develop solutions to enhance patient care, diagnostics, and medical accessibility.</div>
          </div>

          <div class="track_item">
            <img src="/tracks/tracks_logo_5.svg" alt="EdTech" width="100" height="100"></img>
            <div class="hidden"><p class="track_subject">EdTech</p>Transform learning experiences through technology-driven educational advancements.</div>
          </div>

          <div class="track_item">
            <img src="/tracks/tracks_logo_1.svg" alt="Blockchain" width="100" height="100"></img>
            <div class="hidden"><p class="track_subject">Blockchain</p>Leverage decentralized technologies for transparency, security, and trust.</div>
          </div>

          <div class="track_item">
            <img src="/tracks/tracks_logo_2.svg" alt="Environmental Impact" width="100" height="100"></img>
            <div class="hidden"><p class="track_subject">Environmental Impact</p>Build tech-driven solutions to tackle sustainability and climate challenges.</div>
          </div>

          <div class="track_item">
            <img src="/tracks/tracks_logo_3.svg" alt="Networking and Communication" width="100" height="100"></img>
            <div class="hidden"><p class="track_subject">Networking and Communication</p>Enhance global connectivity through efficient and seamless communication systems.</div>
          </div>

        </div>
      </div>
    </article>
  )
}
