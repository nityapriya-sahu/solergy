import { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import useInView from '../../hooks/useInView';
import styles from './Testimonials.module.scss';

const QUOTE =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.";

const TESTIMONIALS = [
  { name: 'David Thompson', role: 'Homeowner', rating: 5, quote: QUOTE },
  { name: 'David Thompson', role: 'Homeowner', rating: 5, quote: QUOTE },
  { name: 'David Thompson', role: 'Homeowner', rating: 5, quote: QUOTE },
];

function Testimonials() {
  const cardsRef = useRef(null);
  const visible = useInView(cardsRef);

  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Testimonials</p>
        <h2 className={styles.heading}>
          What Our <span className={styles.highlight}>Customers Say</span>
        </h2>
        <p className={styles.subheading}>
          We're proud to help homeowners and businesses make the switch to
          clean, reliable solar energy. Discover how our commitment to
          quality, performance, and customer satisfaction has made a lasting
          impact on our clients.
        </p>

        <div className={styles.cards} ref={cardsRef}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.cardReveal} ${visible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
