import { useRef } from 'react';
import logo from '../../assets/solergy-white.png';
import useInView from '../../hooks/useInView';
import styles from './Footer.module.scss';
import reveal from '../../styles/reveal.module.scss';

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: ['About Us', 'Our Services', 'Projects', 'Why Choose Us', 'Testimonials', 'Contact Us'],
  },
  {
    title: 'Services',
    links: ['Residential Solar', 'Commercial Solar', 'Battery Storage', 'EV Charging', 'Solar Maintenance', 'Solar Consultation'],
  },
  {
    title: 'Resources',
    links: ['FAQs', 'Blog & News', 'Solar Guide', 'Financing Options', 'Warranty', 'Privacy Policy'],
  },
];

const CONTACT_LINES = [
  { icon: 'phone', value: '+1 (888) 555-0199' },
  { icon: 'mail', value: 'hello@abbaspecialtys.com' },
  { icon: 'pin', value: '245 Green Energy Avenue' },
  { icon: 'clock', value: 'Monday to Friday' },
];

const SOCIAL_ICONS = ['facebook', 'instagram', 'youtube', 'pinterest'];

const CONTACT_SVGS = {
  phone: (
    <path
      d="M4 3h2.5l1 3.5-1.6 1.3a9 9 0 004.3 4.3l1.3-1.6 3.5 1V14a1 1 0 01-1 1c-6.1 0-11-4.9-11-11a1 1 0 011-1z"
      stroke="#EC4D00"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#EC4D00" strokeWidth="1.3" />
      <path d="M2.5 5l6 5 6-5" stroke="#EC4D00" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  pin: (
    <>
      <path d="M9 16s5.5-5.2 5.5-9.5a5.5 5.5 0 00-11 0C3.5 10.8 9 16 9 16z" stroke="#EC4D00" strokeWidth="1.3" />
      <circle cx="9" cy="6.5" r="1.8" stroke="#EC4D00" strokeWidth="1.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="9" cy="9" r="6.5" stroke="#EC4D00" strokeWidth="1.3" />
      <path d="M9 5.5V9l2.5 1.5" stroke="#EC4D00" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
};

const SOCIAL_SVGS = {
  facebook: <path d="M12 5.5h-1.3c-.5 0-1 .4-1 1v1.5H12l-.3 2H9.7V15H7.4v-5H6V8h1.4V6.3C7.4 4.8 8.5 3.5 10 3.5h2v2z" fill="currentColor" />,
  instagram: (
    <>
      <rect x="3" y="3" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12.7" cy="5.3" r="0.8" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5" width="13" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7.5 7.3v3.4l3-1.7-3-1.7z" fill="currentColor" />
    </>
  ),
  pinterest: (
    <path
      d="M9 3.5A5.5 5.5 0 006.2 13.7c-.1-.9-.2-2.2 0-3.2l1-4.2s-.3-.5-.3-1.3c0-1.2.7-2.1 1.6-2.1.7 0 1.1.6 1.1 1.3 0 .8-.5 2-.8 3.1-.2.9.4 1.7 1.4 1.7 1.6 0 2.8-1.7 2.8-4.2 0-2.2-1.6-3.7-3.8-3.7-2.6 0-4.1 1.9-4.1 3.9 0 .8.3 1.6.7 2-.1.3-.2.9-.2 1a.15.15 0 01-.2.1c-.9-.4-1.4-1.6-1.4-2.6 0-2.1 1.6-4.5 4.6-4.5 2.4 0 4.3 1.7 4.3 4 0 2.4-1.5 4.3-3.6 4.3-.7 0-1.4-.4-1.6-.8l-.4 1.7c-.2.6-.5 1.4-.8 1.8.6.2 1.2.3 1.9.3A5.5 5.5 0 009 3.5z"
      fill="currentColor"
    />
  ),
};

function Footer() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, 0.1);

  return (
    <footer
      className={`${styles.footer} ${reveal.sectionReveal} ${
        visible ? reveal.sectionVisible : ''
      }`}
      ref={sectionRef}
    >
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src={logo} alt="Solergy" className={styles.logo} />
          <p className={styles.tagline}>
            We provide innovative solar energy solutions for homes and
            businesses, helping our customers reduce energy costs, improve
            efficiency.
          </p>
          <div className={styles.social}>
            {SOCIAL_ICONS.map((icon) => (
              <a href="#social" key={icon} className={styles.socialIcon} aria-label={icon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {SOCIAL_SVGS[icon]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title} className={styles.column}>
            <h4 className={styles.columnTitle}>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            {CONTACT_LINES.map((line) => (
              <li key={line.value}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {CONTACT_SVGS[line.icon]}
                </svg>
                <span>{line.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Solergy. All rights reserved.</p>
        <div className={styles.legal}>
          <a href="#privacy">Privacy</a>
          <span className={styles.dot}>&middot;</span>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
