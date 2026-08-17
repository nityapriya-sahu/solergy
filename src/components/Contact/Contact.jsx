import { useRef, useState } from 'react';
import Button from '../common/Button/Button';
import useInView from '../../hooks/useInView';
import styles from './Contact.module.scss';
import reveal from '../../styles/reveal.module.scss';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 3h2.5l1 3.5-1.6 1.3a9 9 0 004.3 4.3l1.3-1.6 3.5 1V14a1 1 0 01-1 1c-6.1 0-11-4.9-11-11a1 1 0 011-1z"
      stroke="#fff"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 16s5.5-5.2 5.5-9.5a5.5 5.5 0 00-11 0C3.5 10.8 9 16 9 16z"
      stroke="#fff"
      strokeWidth="1.3"
    />
    <circle cx="9" cy="6.5" r="1.8" stroke="#fff" strokeWidth="1.3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="6.5" stroke="#fff" strokeWidth="1.3" />
    <path d="M9 5.5V9l2.5 1.5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const CONTACT_ITEMS = [
  { icon: <PhoneIcon />, label: 'Call US', value: '+1 (888) 555-0199' },
  { icon: <PinIcon />, label: 'Visit US', value: '245 Green Energy Avenue' },
  { icon: <ClockIcon />, label: 'Timing', value: 'Monday to Friday' },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, 0.1);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className={`${styles.contact} ${reveal.sectionReveal} ${
        visible ? reveal.sectionVisible : ''
      }`}
      id="contact"
      ref={sectionRef}
    >
      <div className={styles.inner}>
        <div className={styles.info}>
          <p className={styles.eyebrow}>Get in Touch</p>
          <h2 className={styles.heading}>
            Ready to Switch to Smart{' '}
            <span className={styles.highlight}>Solar Energy?</span>
          </h2>
          <p className={styles.description}>
            Whether you're planning a new solar installation or looking to
            upgrade your existing system,.
          </p>

          <ul className={styles.items}>
            {CONTACT_ITEMS.map((item) => (
              <li key={item.label}>
                <span className={styles.iconBadge}>{item.icon}</span>
                <span>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <span className={styles.itemValue}>{item.value}</span>
                </span>
              </li>
            ))}
          </ul>

          <span className={styles.dots} aria-hidden="true">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className={styles.dot} />
            ))}
          </span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formHeading}>
            Request a Free <span className={styles.highlight}>Quote</span>
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={styles.textarea}
          />

          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
