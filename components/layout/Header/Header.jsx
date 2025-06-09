"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "@/public/images/Logo.png";
import FilledButton from "@/components/ui/FilledButton";
import Hamburger from "@/public/svgs/Hamburger";
import { useState } from "react";
import Close from "@/public/svgs/Close";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="box">
          <div
            className={`${styles.header_content} ${
              isMobileMenuOpen ? styles.opened : ""
            }`}
          >
            <Image src={Logo} alt="Tracewit Logo" />

            <nav className={styles.nav}>
              <ul>
                <li>Products</li>
                <li>Platforms</li>
                <li>Benefits</li>
                <li>Teams</li>
                <li>Faqs</li>
              </ul>
            </nav>

            <div className={styles.actions}>
              <FilledButton className={styles.desktop_button} />
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
            <li>Products</li>
            <li>Platforms</li>
            <li>Benefits</li>
            <li>Teams</li>
            <li>Faqs</li>
          </ul>
          {isMobileMenuOpen && <div className={styles.mobile_glow}></div>}
         
        </div>
        
      </div>
    </>
  );
}
