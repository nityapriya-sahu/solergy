import styles from './Tagline.module.scss';

function Tagline() {
  return (
    <section className={styles.tagline}>
      <p className={styles.text}>
        We <span className={styles.highlight}>Engineer.</span> We{' '}
        <span className={styles.highlight}>Procure.</span>
        <br />
        We <span className={styles.highlight}>Build.</span> We{' '}
        <span className={styles.highlight}>Maintain.</span>
      </p>
    </section>
  );
}

export default Tagline;
