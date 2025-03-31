import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article className='article-background'>
        <h1>TRACKS</h1>
        
        <div class="track_container">
          <h2>Choose any one from the following themes for your project</h2>
          
          <div class="track_grid">
            <div class="track_item"><img src="/tracks_logo_1.svg" alt="tracks_Logo__1" width="150"></img></div>
            <div class="track_item"><img src="/tracks_logo_2.svg" alt="tracks_Logo__2" width="150"></img></div>
            <div class="track_item"><img src="/tracks_logo_3.svg" alt="tracks_Logo__3" width="150"></img></div>
            <div class="track_item"><img src="/tracks_logo_4.svg" alt="tracks_Logo__4" width="150"></img></div>
            <div class="track_item"><img src="/tracks_logo_5.svg" alt="tracks_Logo__5" width="150"></img></div>
            <div class="track_item"><img src="/tracks_logo_6.svg" alt="tracks_Logo__6" width="150"></img></div>
          </div>

        </div>
      </article>

    </>
  )
}

export default App
