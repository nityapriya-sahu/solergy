import styles from './Button.module.scss';

function Button({ children, variant = 'primary', showArrow = false, href, ...rest }) {
  const className = `${styles.button} ${styles[variant]}`;
  const content = (
    <>
      {children}
      {showArrow && <span className={styles.arrow}>&rarr;</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} {...rest}>
      {content}
    </button>
  );
}

export default Button;
