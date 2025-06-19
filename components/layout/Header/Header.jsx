"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "@/public/images/Logo.png";
import FilledButton from "@/components/ui/FilledButton";
import Hamburger from "@/public/svgs/Hamburger";
import { useState, useEffect } from "react";
import Close from "@/public/svgs/Close";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { label: "Products", sectionId: "products" },
    { label: "Platforms", sectionId: "platforms" },
    { label: "Teams", sectionId: "teams" },
    { label: "Benefits", sectionId: "benefits" },
    { label: "Faqs", sectionId: "faqs" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.sectionId));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (!section) continue;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className="box">
          <div
            className={`${styles.header_content} ${
              isMobileMenuOpen ? styles.opened : ""
            }`}
          >
            <Image 
              src={Logo} 
              alt="Tracewit Logo" 
              onClick={() => router.push('/')}
              style={{ cursor: 'pointer' }}
            />

            <nav className={styles.nav}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.sectionId}>
                    <button 
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`${styles.nav_link} ${
                        activeSection === item.sectionId ? styles.active : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.actions}>
              <FilledButton
  className={styles.desktop_button}
  onClick={() => router.push("/contact")}
/>

              <button
                className={styles.mobile_menu_button}
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <Close /> : <Hamburger />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`${styles.mobile_menu} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.mobile_nav}>
          <ul>
            {navItems.map((item) => (
              <li key={`mobile-${item.sectionId}`}>
                <button 
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`${styles.mobile_nav_link} ${
                    activeSection === item.sectionId ? styles.active : ''
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          {isMobileMenuOpen && <div className={styles.mobile_glow}></div>}
        </div>
      </div>
    </>
  );
}