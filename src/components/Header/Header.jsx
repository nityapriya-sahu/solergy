import { useEffect, useState } from "react";
import logo from "../../assets/solergy-logo.png";
import Button from "../common/Button/Button";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

const SCROLL_OFFSET = 140;

function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => ({
      label: link.label,
      el: document.getElementById(link.href.slice(1)),
    })).filter((section) => section.el);

    let frame = null;

    const updateActiveOnScroll = () => {
      frame = null;
      const scrollPos = window.scrollY + SCROLL_OFFSET;

      let current = sections[0]?.label;
      for (const section of sections) {
        if (section.el.offsetTop <= scrollPos) {
          current = section.label;
        }
      }

      if (current) {
        setActiveLink(current);
      }
    };

    const onScroll = () => {
      if (frame === null) {
        frame = requestAnimationFrame(updateActiveOnScroll);
      }
    };

    updateActiveOnScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
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
    setActiveLink("Home");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={handleLogoClick}>
          <img src={logo} alt="Solergy" />
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className={`${styles.navLink} ${
                activeLink === link.label ? styles.active : ""
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

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className={`${styles.mobileNavLink} ${
                activeLink === link.label ? styles.active : ""
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
