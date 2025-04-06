import React from 'react';
import PropTypes from 'prop-types';
import './Sponsors.css';

export default function Sponsors({ sponsorLogos = [] }) {
  const defaultLogos = [
    { src: '/sponsors_logo/hp_logo.svg', alt: 'HP Logo', id: 'hp' },
    { src: '/sponsors_logo/monster_logo.svg', alt: 'Monster Energy Logo', id: 'monster' },
    { src: '/sponsors_logo/book_my_show_logo.svg', alt: 'Book My Show Logo', id: 'bookmyshow' },
    { src: '/sponsors_logo/unstop_logo.svg', alt: 'Unstop Logo', id: 'unstop' },
    { src: '/sponsors_logo/gfg_logo.svg', alt: 'GFG Logo', id: 'gfg' },
    { src: '/sponsors_logo/tribeVibe_logo.svg', alt: 'Tribe Vibe Logo', id: 'tribevibe' },
    { src: '/sponsors_logo/stepNex_logo.svg', alt: 'StepNex Technologies Logo', id: 'stepnex' },
  ];

  const logosToDisplay = sponsorLogos.length > 0 ? sponsorLogos : defaultLogos;

  return (
    <section className="sponsors">
      {logosToDisplay.map((logo) => (
        <div key={logo.id || logo.src}>
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </section>
  );
}

Sponsors.propTypes = {
  sponsorLogos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ),
};

Sponsors.defaultProps = {
  sponsorLogos: [],
};