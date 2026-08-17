import { useEffect, useState } from "react";
import logo from "../../assets/solergy-black.png";
import Button from "../common/Button/Button";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#" },
  { label: "Calculator", href: "#" },
  { label: "Projects", href: "#" },
  { label: "FAQ", href: "#" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = () => window.innerHeight * 0.1;

    const updateScrolled = () => {
      setScrolled(window.scrollY > scrollThreshold());
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("resize", updateScrolled);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("resize", updateScrolled);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    if (href === "#") {
      e.preventDefault();
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={handleLogoClick}>
          <img src={logo} alt="Solergy" />
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`${styles.navLink} ${
                link.label === "Home" ? styles.active : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.desktopActions}>
          <Button variant="primary" href="#contact">
            GET A QUOTE
          </Button>
        </div>

        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`${styles.mobileNavLink} ${
                link.label === "Home" ? styles.active : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          variant="primary"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          GET A QUOTE
        </Button>
      </div>
    </header>
  );
}

export default Header;
