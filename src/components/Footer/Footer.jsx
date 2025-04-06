import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default function Footer({ contacts, socialLinks }) {
  const defaultContacts = [
    { name: 'Rishi Joshi', phone: '+919569913103', role: 'Chairperson' },
    { name: 'Pranav Bhardwaj', phone: '+919999558266', role: 'Vice-Chairperson' },
    { name: 'Mohit Hingorani', phone: '+919811033533', role: 'General Secretary' },
  ];

  const defaultSocialLinks = [
    { href: 'https://www.instagram.com/ieee_csmuj/', src: '/social_media/instagram.svg', alt: 'Instagram' },
    { href: 'https://www.linkedin.com/company/ieee-cs-muj', src: '/social_media/linkedin.svg', alt: 'LinkedIn' },
    { href: 'https://medium.com/@ieeecs', src: '/social_media/medium.svg', alt: 'Medium' },
    { href: 'https://x.com/ieeecsmuj', src: '/social_media/twitter.svg', alt: 'Twitter' },
  ];

  const contactList = contacts || defaultContacts;
  const socialMediaList = socialLinks || defaultSocialLinks;

  return (
    <footer id="contact">
      <div className="footer_logo">
        <img src="/footer/footer_logo.svg" alt="Footer Logo" />
        <div>/</div>
        <img src="/footer/ieee_main_logo_large.svg" alt="IEEE CS Logo" />
      </div>
      <div className="footer_contacts">
        {contactList.map((contact, index) => (
          <div key={index}>
            <span>{contact.name}</span>
            <a href={`tel:${contact.phone}`}>
              <p>{contact.phone}</p>
            </a>
            <p>{contact.role}</p>
          </div>
        ))}
      </div>
      <div className="social_media">
        <div className="links">
          <a href="https://cs.ieeemuj.com/">
            <img src="/social_media/globe.svg" alt="Website" />
          </a>
          <a href="https://cs.ieeemuj.com/">https://cs.ieeemuj.com/</a>
        </div>
        <div className="media_icons">
          {socialMediaList.map((link, index) => (
            <a key={index} href={link.href}>
              <img src={link.src} alt={link.alt} />
            </a>
          ))}
        </div>
        <div className="tagline">Made with 💛 by IEEE CS MUJ</div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  contacts: [
    { name: 'Rishi Joshi', phone: '+919569913103', role: 'Chairperson' },
    { name: 'Pranav Bhardwaj', phone: '+919999558266', role: 'Vice-Chairperson' },
    { name: 'Mohit Hingorani', phone: '+919811033533', role: 'General Secretary' },
  ],
  socialLinks: [
    { href: 'https://www.instagram.com/ieee_csmuj/', src: '/social_media/instagram.svg', alt: 'Instagram' },
    { href: 'https://www.linkedin.com/company/ieee-cs-muj', src: '/social_media/linkedin.svg', alt: 'LinkedIn' },
    { href: 'https://medium.com/@ieeecs', src: '/social_media/medium.svg', alt: 'Medium' },
    { href: 'https://x.com/ieeecsmuj', src: '/social_media/twitter.svg', alt: 'Twitter' },
  ],
};