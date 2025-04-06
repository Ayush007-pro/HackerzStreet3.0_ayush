import React from 'react';
import PropTypes from 'prop-types';
import './Tracks.css';

export default function Tracks() {
  const trackData = [
    {
      id: 'fintech',
      imgSrc: '/tracks/tracks_logo_4.svg',
      alt: 'FinTech',
      subject: 'FinTech',
      description: 'Innovate in financial services with secure, scalable, and user-friendly solutions.'
    },
    {
      id: 'healthcare',
      imgSrc: '/tracks/tracks_logo_6.svg',
      alt: 'Healthcare',
      subject: 'Healthcare',
      description: 'Develop solutions to enhance patient care, diagnostics, and medical accessibility.'
    },
    {
      id: 'edtech',
      imgSrc: '/tracks/tracks_logo_5.svg',
      alt: 'EdTech',
      subject: 'EdTech',
      description: 'Transform learning experiences through technology-driven educational advancements.'
    },
    {
      id: 'blockchain',
      imgSrc: '/tracks/tracks_logo_1.svg',
      alt: 'Blockchain',
      subject: 'Blockchain',
      description: 'Leverage decentralized technologies for transparency, security, and trust.'
    },
    {
      id: 'environmental',
      imgSrc: '/tracks/tracks_logo_2.svg',
      alt: 'Environmental Impact',
      subject: 'Environmental Impact',
      description: 'Build tech-driven solutions to tackle sustainability and climate challenges.'
    },
    {
      id: 'networking',
      imgSrc: '/tracks/tracks_logo_3.svg',
      alt: 'Networking and Communication',
      subject: 'Networking and Communication',
      description: 'Enhance global connectivity through efficient and seamless communication systems.'
    }
  ];

  return (
    <article id="tracks" className="article-background">
      <h1>TRACKS</h1>
      
      <div className="track_container">
        <h2>Choose any one from the following themes for your project</h2>
        
        <div className="track_grid">
          {trackData.map((track) => (
            <div className="track_item" key={track.id}>
              <img 
                src={track.imgSrc} 
                alt={track.alt}
              />
              <div className="hidden">
                <p className="track_subject">{track.subject}</p>
                {track.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imgSrc: PropTypes.string,
      alt: PropTypes.string,
      subject: PropTypes.string,
      description: PropTypes.string
    })
  )
};

Tracks.defaultProps = {
  tracks: null
};