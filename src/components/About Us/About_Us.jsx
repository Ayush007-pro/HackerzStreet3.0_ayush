import React from 'react';
import './About_Us.css';
import PropTypes from 'prop-types';
export default function AboutUs() {
  return (
    <div id="about_us" className="about_us">
      <div className="about_header">
        <h1>ABOUT US</h1>
        <h2>IEEE COMPUTER SOCIETY MUJ</h2>
      </div>
      <div className="about_container">
        <div className="about_sub_container">
          <div className="about_logo">
            <img 
              className="yellow" 
              src="/aboutUs/ieee_yellow_logo.svg" 
              height="450" 
              alt="IEEE CS Logo Yellow" 
            />
            <img 
              className="white" 
              src="/aboutUs/ieee_white_logo.svg" 
              height="450" 
              alt="IEEE CS Logo White" 
            />
          </div>

          <div className="about_details">
            <div className="cs-text">
              <div>CS</div>
            </div>
            <hr />
            <div className="about_text">
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
  );
}

AboutUs.propTypes = {
  // Add props if you plan to make this dynamic
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

AboutUs.defaultProps = {
  title: 'ABOUT US',
  subtitle: 'IEEE COMPUTER SOCIETY MUJ',
};