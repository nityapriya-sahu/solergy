import useCountUp from './useCountUp';
import styles from './Hero.module.scss';

function Stat({ target, suffix, label, active }) {
  const count = useCountUp(target, active);

  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>
        {count}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default Stat;
