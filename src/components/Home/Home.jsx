import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

export default function Home() {
  const socialLinks = [
    { href: 'https://www.instagram.com/ieee_csmuj/', src: '/social_media/instagram.svg', alt: 'Instagram' },
    { href: 'https://www.linkedin.com/company/ieee-cs-muj', src: '/social_media/linkedin.svg', alt: 'LinkedIn' },
    { href: 'https://medium.com/@ieeecs', src: '/social_media/medium.svg', alt: 'Medium' },
    { href: 'https://x.com/ieeecsmuj', src: '/social_media/twitter.svg', alt: 'Twitter' }
  ];

  return (
    <section id="home" className="home">
      <div className="compass_grid">
        <div></div>
        <img src="/home/interactive_radial_pattern.svg" alt="Radial Pattern" />
        <div></div>
      </div>
      <div className="home_heading"><div>HACKERZ</div><div>STREET</div></div>
      <div className="home_subheading">A 24-HOUR FLAGSHIP HACKATHON</div>
      <div className="home_subheading">BY IEEE CS MUJ</div>
      <div className="home_grid">
        <div className="home_left">
          <div className="left_1">3.0</div>
          <div className="left_2">
            Hackerzstreet 3.0, set to ignite creativity and innovation - an intense 24-hour coding marathon packed with excitement and collaboration. This event features a single round where participants delve into diverse technical themes, each presenting unique challenges and opportunities.
          </div>
          <div className="left_3">
            <div className="left_3_1">
              <div>Want to know more?</div>
              <p>Scroll to find out!</p>
            </div>
            <div className="left_3_2">
              <a href="#schedule">
                <img src="/home/home_down_arrow.svg" alt="Down Arrow" />
              </a>
            </div>
          </div>
        </div>
        <div className='home_void'></div>
        <div className='home_void'></div>
        <div className="home_right">
          <div className="right_1">
            <div>60K</div>
            <p>PRIZE POOL</p>
          </div>
          <div className="right_2">
            <div className="fraction">
              <div className="numerator_wrapper">
                <div className="numerator">12</div>
                <p className="numerator">-</p>
              </div>
              <hr />
              <div className="denominator_wrapper">
                <p className="denominator">-</p>
                <div className="denominator">13</div>
              </div>
            </div>
            <div className="right_date">APRIL 2025</div>
          </div>
          <div className="right_3">
            {socialLinks.map((link, index) => (
              <div key={index}>
                <a href={link.href}>
                  <img src={link.src} alt={link.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string
};

Home.defaultProps = {
  heading: 'HACKERZSTREET',
  subheading: 'A 24-HOUR FLAGSHIP HACKATHON'
};