import { useRef, useState } from 'react';
import FAQItem from './FAQItem';
import useInView from '../../hooks/useInView';
import styles from './FAQ.module.scss';
import reveal from '../../styles/reveal.module.scss';

const FAQS = [
  {
    question: 'How does solar energy work?',
    answer:
      'Solar panels convert sunlight into electricity using photovoltaic cells. That electricity powers your home directly or is stored in a battery for later use.',
  },
  {
    question: 'How much can I save with solar?',
    answer:
      'Savings vary based on your energy usage, roof size, and location, but most homeowners see a significant reduction in their monthly electricity bills.',
  },
  {
    question: 'How long does solar installation take?',
    answer:
      'Most residential installations are completed within one to three days, depending on system size and roof complexity.',
  },
  {
    question: 'Do solar panels work on cloudy days?',
    answer:
      'Yes, solar panels still generate electricity on cloudy days, though at a reduced efficiency compared to direct sunlight.',
  },
  {
    question: 'What maintenance do solar panels require?',
    answer:
      'Solar panels require minimal maintenance — periodic cleaning and an annual inspection are typically enough to keep your system running efficiently.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, 0.1);

  return (
    <section
      className={`${styles.faq} ${reveal.sectionReveal} ${
        visible ? reveal.sectionVisible : ''
      }`}
      id="faq"
      ref={sectionRef}
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>FAQs</p>
        <h2 className={styles.heading}>
          Powering a Better <span className={styles.highlight}>Tomorrow</span>
        </h2>
        <p className={styles.subheading}>
          Explore some of our recent solar installations for homes,
          businesses, and industrial facilities. Every project reflects our
          commitment to quality performance.
        </p>

        <div className={styles.list}>
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
