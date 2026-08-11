import styles from './WhySolar.module.scss';

function WhySolarCard({ title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconBadge}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="8" r="3.5" stroke="#EC4D00" strokeWidth="1.5" />
          <path
            d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
            stroke="#EC4D00"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.5 12.5a3.25 3.25 0 100-6.5"
            stroke="#EC4D00"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.5 14c2.9 0 5.2 2.3 5.2 5.2"
            stroke="#EC4D00"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18 4.5l1.2-1.2M20.5 8h1.7"
            stroke="#EC4D00"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default WhySolarCard;
