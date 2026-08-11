import houseImage from '../../assets/why-solergy-house.jpg';
import Button from '../common/Button/Button';
import styles from './WhySolergy.module.scss';

function WhySolergy() {
  return (
    <section className={styles.whySolergy}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <span className={styles.arc} aria-hidden="true" />
          <img src={houseImage} alt="House with solar panels at sunset" className={styles.image} />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>Why Solergy</p>
          <h2 className={styles.heading}>Clean Energy for a Smarter Future</h2>
          <p className={styles.description}>
            We make switching to solar simple, efficient, and worry-free.
            From consultation and installation to long-term support, our
            experienced team delivers reliable renewable energy solutions
            tailored to your needs.
          </p>
          <Button variant="primary" showArrow href="#contact">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WhySolergy;
