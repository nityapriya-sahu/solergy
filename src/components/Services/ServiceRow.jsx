import styles from './Services.module.scss';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="#EC4D00" />
    <path
      d="M5 8.2l1.8 1.8L11 6.5"
      stroke="#fff"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ServiceRow({ image, title, description, points, note, reverse = false }) {
  return (
    <div className={`${styles.row} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.points}>
          {points.map((point) => (
            <li key={point}>
              <CheckIcon />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {note && <p className={styles.note}>{note}</p>}
      </div>
    </div>
  );
}

export default ServiceRow;
