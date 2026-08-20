import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import houseWater from '../../assets/service1.jpg';
import ServiceRow from './ServiceRow';
import useInView from '../../hooks/useInView';
import styles from './Services.module.scss';
import reveal from '../../styles/reveal.module.scss';

gsap.registerPlugin(ScrollTrigger);

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam laborum.';

const POINTS = [
  'Donec ornare lorem sed felis iaculis, sed convallis urna gravida.',
  'Etiam sit amet lorem varius, suscipit nibh in, dictum urna.',
  'Nunc at urna mollis, tincidunt eros ut, lacinia sem.',
];

const NOTE = 'In et ex id sem aliquam volutpat.';

const SERVICES = [
  { image: houseWater, reverse: false, title: 'Residential Solar' },
  { image: houseWater, reverse: true, title: 'Commercial Solar' },
  { image: houseWater, reverse: false, title: 'Solar Installation' },
];

function Services() {
  const cardRefs = useRef([]);
  const stageRef = useRef(null);
  const pinRef = useRef(null);
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, 0.1);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return undefined;

    const syncHeaderOffset = () => {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      pinRef.current.style.setProperty('--header-offset', `${headerHeight}px`);
    };
    syncHeaderOffset();

    const ctx = gsap.context(() => {
      const vh = window.innerHeight;

      gsap.set(cards[0], { scale: 1, opacity: 1, visibility: 'visible', y: 0 });
      if (cards[1]) {
        gsap.set(cards[1], { scale: 0.8, opacity: 1, visibility: 'visible', y: 0 });
      }
      cards.slice(2).forEach((card) => {
        gsap.set(card, { scale: 0.8, opacity: 0, visibility: 'hidden', y: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${cards.length * vh}`,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        const next = cards[i + 1];

        tl.addLabel(`segment${i}`);
        tl.to({}, { duration: 0.33 });

        tl.to(
          card,
          { y: -vh, ease: 'power2.inOut', duration: 1 },
          `segment${i}+=0.33`
        );
        tl.to(
          next,
          {
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
            onStart: () => gsap.set(next, { visibility: 'visible' }),
          },
          `segment${i}+=0.33`
        );

        tl.to({}, { duration: 0.34 });
      });
    }, pinRef);

    const refresh = () => {
      syncHeaderOffset();
      ScrollTrigger.refresh();
    };
    if (document.readyState === 'complete') {
      refresh();
    } else {
      window.addEventListener('load', refresh);
    }
    window.addEventListener('resize', syncHeaderOffset);

    return () => {
      ctx.revert();
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', syncHeaderOffset);
    };
  }, []);

  return (
    <section className={styles.services} id="services" ref={sectionRef}>
      <div className={styles.pinWrap} ref={pinRef}>
        <div
          className={`${styles.inner} ${reveal.sectionReveal} ${
            visible ? reveal.sectionVisible : ''
          }`}
        >
          <h2 className={styles.heading}>
            Smart <span className={styles.highlight}>Solar Solutions</span>{' '}
            Tailored to Your Needs
          </h2>
        </div>

        <div className={styles.stage} ref={stageRef}>
          {SERVICES.map((service, index) => (
            <div className={styles.cardSection} key={index}>
              <div
                className={styles.card}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={{ zIndex: SERVICES.length - index }}
              >
                <ServiceRow
                  image={service.image}
                  reverse={service.reverse}
                  title={service.title}
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
