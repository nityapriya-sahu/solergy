import { useRef } from 'react';
import WhySolarCard from './WhySolarCard';
import useInView from '../../hooks/useInView';
import styles from './WhySolar.module.scss';
import reveal from '../../styles/reveal.module.scss';

const CARDS = [
  {
    title: 'Trusted Expertise',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    direction: 'cardLeft',
  },
  {
    title: 'Trusted Expertise',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    direction: 'cardCenter',
  },
  {
    title: 'Trusted Expertise',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    direction: 'cardRight',
  },
];

function WhySolar() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, 0.1);

  return (
    <section
      className={`${styles.whySolar} ${reveal.sectionReveal} ${
        visible ? reveal.sectionVisible : ''
      }`}
      id="about"
      ref={sectionRef}
    >
      <div className={styles.inner}>
        <div className={`${styles.headingReveal} ${visible ? styles.headingVisible : ''}`}>
          <p className={styles.eyebrow}>Why Solar</p>
          <h2 className={styles.heading}>
            The Smart <span className={styles.highlight}>Choice for</span> a
            Cleaner, Greener Future
          </h2>
        </div>

        <div className={styles.cards}>
          {CARDS.map((card, index) => (
            <div
              key={index}
              className={`${styles.cardReveal} ${styles[card.direction]} ${
                visible ? styles.cardVisible : ''
              }`}
              style={{ transitionDelay: visible ? '250ms' : '0ms' }}
            >
              <WhySolarCard title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySolar;
