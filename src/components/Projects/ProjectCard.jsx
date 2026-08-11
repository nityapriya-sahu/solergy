import styles from './Projects.module.scss';

const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 6.5L7 2l5 4.5V12a.5.5 0 01-.5.5H9V9H5v3.5H2.5a.5.5 0 01-.5-.5V6.5z"
      stroke="#EC4D00"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.5 12s4-3.8 4-7a4 4 0 10-8 0c0 3.2 4 7 4 7z"
      stroke="#EC4D00"
      strokeWidth="1.2"
    />
    <circle cx="6.5" cy="5" r="1.4" stroke="#EC4D00" strokeWidth="1.2" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="2.5" width="10" height="9" rx="1.5" stroke="#EC4D00" strokeWidth="1.2" />
    <path d="M1.5 5.5h10M4 1.5v2M9 1.5v2" stroke="#EC4D00" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

function ProjectCard({ image, category, title, location, power, date }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.badge}>
          <HomeIcon />
          {category}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>
          <PinIcon />
          {location}
        </p>

        <div className={styles.specs}>
          <span>{power}</span>
          <span className={styles.specItem}>
            <CalendarIcon />
            {date}
          </span>
        </div>

        <a href="#project" className={styles.link}>
          View Project &rarr;
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
