import { useRef } from 'react';
import heroHouse from '../../assets/hero-house.png';
import whySolergyHouse from '../../assets/why-solergy-house.jpg';
import houseWater from '../../assets/service1.jpg';
import brickHouse from '../../assets/service2.jpg';
import ProjectCard from './ProjectCard';
import useInView from '../../hooks/useInView';
import styles from './Projects.module.scss';
import reveal from '../../styles/reveal.module.scss';

const PROJECTS = [
  {
    image: heroHouse,
    category: 'Residential',
    title: 'Modern Home Installation',
    location: 'Austin, Texas',
    power: '6.2 kW Solar',
    date: 'May 2024',
  },
  {
    image: whySolergyHouse,
    category: 'Residential',
    title: 'Corporate Office Solution',
    location: 'Austin, Texas',
    power: '6.2 kW Solar',
    date: 'May 2024',
  },
  {
    image: houseWater,
    category: 'Residential',
    title: 'Manufacturing Plant',
    location: 'Austin, Texas',
    power: '6.2 kW Solar',
    date: 'May 2024',
  },
  {
    image: brickHouse,
    category: 'Residential',
    title: 'Community Solar Project',
    location: 'Austin, Texas',
    power: '6.2 kW Solar',
    date: 'May 2024',
  },
];

function Projects() {
  const gridRef = useRef(null);
  const visible = useInView(gridRef);
  const sectionRef = useRef(null);
  const sectionVisible = useInView(sectionRef, 0.1);

  return (
    <section
      className={`${styles.projects} ${reveal.sectionReveal} ${
        sectionVisible ? reveal.sectionVisible : ''
      }`}
      id="projects"
      ref={sectionRef}
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Our Projects</p>
        <h2 className={styles.heading}>
          Powering a Better <span className={styles.highlight}>Tomorrow</span>
        </h2>
        <p className={styles.subheading}>
          Explore some of our recent solar installations for homes,
          businesses, and industrial facilities. Every project reflects our
          commitment to quality, innovation, and sustainable energy solutions
          built for long-term performance.
        </p>

        <div className={styles.grid} ref={gridRef}>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`${styles.cardReveal} ${visible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
