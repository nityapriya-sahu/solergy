import { useRef } from "react";
import heroHouse from "../../assets/hero-house.png";
import Button from "../common/Button/Button";
import Stat from "./Stat";
import useInView from "../../hooks/useInView";
import styles from "./Hero.module.scss";

const STATS = [
  { target: 500, suffix: "+", label: "Projects Completed" },
  { target: 250, suffix: "+", label: "Happy Clients" },
  { target: 5, suffix: "M+", label: "Tons CO₂ Saved" },
];

function Hero() {
  const statsCardRef = useRef(null);
  const statsVisible = useInView(statsCardRef, 0.4);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Solar Energy Solutions</p>
          <h1 className={styles.heading}>
            Powering a Sustainable Future with{" "}
            <span className={styles.highlight}>Smart Solar Energy.</span>
          </h1>
          <p className={styles.description}>
            At Solergy, we design and deliver intelligent solar solutions that
            help homeowners and businesses reduce energy costs, improve
            efficiency, and build a cleaner future with confidence.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" showArrow href="#contact">
              Get a Free Quote
            </Button>
            <Button variant="secondary" href="#services">
              Explore Services
            </Button>
          </div>
        </div>

        <div className={styles.imageWrap}>
          {/* <span className={styles.sunCircle} aria-hidden="true" /> */}
          {/* <span className={styles.arc} aria-hidden="true" /> */}
          <img
            src={heroHouse}
            alt="Modern house with solar panels"
            className={styles.houseImage}
          />

          <div className={styles.statsCard} ref={statsCardRef}>
            {STATS.map((stat) => (
              <Stat
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                active={statsVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
