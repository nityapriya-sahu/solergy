import { useEffect, useRef } from 'react';
import houseWater from '../../assets/service1.jpg';
import brickHouse from '../../assets/service2.jpg';
import installer from '../../assets/service3.jpg';
import ServiceRow from './ServiceRow';
import useInView from '../../hooks/useInView';
import styles from './Services.module.scss';
import reveal from '../../styles/reveal.module.scss';

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam laborum.';

const POINTS = [
  'Donec ornare lorem sed felis iaculis, sed convallis urna gravida.',
  'Etiam sit amet lorem varius, suscipit nibh in, dictum urna.',
  'Nunc at urna mollis, tincidunt eros ut, lacinia sem.',
];

const NOTE = 'In et ex id sem aliquam volutpat.';

const SERVICES = [
  { image: houseWater, reverse: false },
  { image: brickHouse, reverse: true },
  { image: installer, reverse: false },
];

const STICKY_TOP = 110;
const TRIGGER_DISTANCE = 480;

const smoothstep = (t) => t * t * (3 - 2 * t);

function Services() {
  const rowRefs = useRef([]);
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, 0.1);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const cards = rowRefs.current;
      if (!cards.length) return;

      const effect = cards.map(() => ({
        scale: 1,
        translateY: 0,
        opacity: 1,
        grayscale: 0,
      }));

      for (let i = 0; i < cards.length - 1; i += 1) {
        const current = cards[i];
        const next = cards[i + 1];
        if (!current || !next) continue;

        const nextTop = next.getBoundingClientRect().top;
        const distance = nextTop - STICKY_TOP;
        const progress = Math.min(Math.max(1 - distance / TRIGGER_DISTANCE, 0), 1);

        const eased = smoothstep(progress);
        const outgoingProgress = eased;
        const incomingProgress = eased;

        const outgoing = effect[i];
        outgoing.translateY += outgoingProgress * -140;

        const incoming = effect[i + 1];
        incoming.scale *= 0.7 + incomingProgress * 0.3;
        incoming.opacity *= incomingProgress;
        incoming.grayscale += (1 - incomingProgress) * 100;
      }

      cards.forEach((card, i) => {
        if (!card) return;
        const { scale, translateY, opacity, grayscale } = effect[i];
        card.style.transform = `translateY(${translateY}px) scale(${scale})`;
        card.style.opacity = opacity;
        card.style.filter = `grayscale(${grayscale}%)`;
      });
    };

    const onScroll = () => {
      if (frame === null) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className={`${styles.services} ${reveal.sectionReveal} ${
        visible ? reveal.sectionVisible : ''
      }`}
      id="services"
      ref={sectionRef}
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Our Services</p>
        <h2 className={styles.heading}>
          Smart <span className={styles.highlight}>Solar Solutions</span>{' '}
          Tailored to Your Needs
        </h2>

        <div className={styles.rows}>
          {SERVICES.map((service, index) => (
            <div key={index} className={styles.stickyItem}>
              <div
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
              >
                <ServiceRow
                  image={service.image}
                  reverse={service.reverse}
                  title="Residential Solar"
                  description={DESCRIPTION}
                  points={POINTS}
                  note={NOTE}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
