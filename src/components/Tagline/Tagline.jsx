import { useEffect, useRef } from 'react';
import styles from './Tagline.module.scss';

const WORDS = [
  { text: 'We', highlight: false },
  { text: 'Engineer.', highlight: true },
  { text: 'We', highlight: false },
  { text: 'Procure.', highlight: true, lineBreakAfter: true },
  { text: 'We', highlight: false },
  { text: 'Build.', highlight: true },
  { text: 'We', highlight: false },
  { text: 'Maintain.', highlight: true },
];

const DIM_COLOR = [216, 216, 220];
const DARK_COLOR = [12, 11, 10];
const PRIMARY_COLOR = [236, 77, 0];

const lerp = (a, b, t) => Math.round(a + (b - a) * t);

const mixColor = (from, to, progress) =>
  `rgb(${lerp(from[0], to[0], progress)}, ${lerp(from[1], to[1], progress)}, ${lerp(
    from[2],
    to[2],
    progress
  )})`;

function Tagline() {
  const sectionRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.25;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

      const activePosition = progress * WORDS.length;

      wordRefs.current.forEach((el, index) => {
        if (!el) return;
        const wordProgress = Math.min(Math.max(activePosition - index, 0), 1);
        const target = WORDS[index].highlight ? PRIMARY_COLOR : DARK_COLOR;
        el.style.color = mixColor(DIM_COLOR, target, wordProgress);
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
    <section className={styles.tagline} ref={sectionRef}>
      <p className={styles.text}>
        {WORDS.map((word, index) => (
          <span key={`${word.text}-${index}`}>
            <span
              className={styles.word}
              ref={(el) => {
                wordRefs.current[index] = el;
              }}
            >
              {word.text}
            </span>
            {word.lineBreakAfter ? <br /> : ' '}
          </span>
        ))}
      </p>
    </section>
  );
}

export default Tagline;
