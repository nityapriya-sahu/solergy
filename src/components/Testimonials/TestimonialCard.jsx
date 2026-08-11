import avatar from '../../assets/user-avatar.png';
import styles from './Testimonials.module.scss';

const DOTS = Array.from({ length: 15 });

function TestimonialCard({ quote, name, role, rating }) {
  return (
    <div className={styles.card}>
      <span className={styles.quoteMark} aria-hidden="true">
        &#8220;
      </span>
      <p className={styles.quote}>{quote}</p>

      <span className={styles.dots} aria-hidden="true">
        {DOTS.map((_, i) => (
          <span key={i} className={styles.dot} />
        ))}
      </span>

      <div className={styles.footer}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
          <div className={styles.rating} aria-label={`${rating} out of 5 stars`}>
            {'★'.repeat(rating)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
