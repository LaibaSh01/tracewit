import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "@/public/images/Logo.png";
import github from "@/public/images/github.png";
import twitter from "@/public/images/twitter.png";
import linkedin from "@/public/images/linkedin.png";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <div className="box">
        <div className={styles.content}>
          <h2 id="footer-heading" className="sr-only">Footer</h2>

          <div className={styles.top}>
            <address className={styles.company_info}>
              <Image src={Logo} alt="Tracewit company logo" priority />

              <p>
                Your trusted partner in AI solutions, creating smarter systems
                for smarter businesses.
              </p>

              <nav className={styles.social_logo} aria-label="Social Media">
                <a
                  href="https://github.com"
                  className={styles.social_item}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our GitHub"
                >
                  <Image src={github} alt="GitHub icon" width={28} height={28} />
                </a>
                <a
                  href="https://twitter.com"
                  className={styles.social_item}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter"
                >
                  <Image src={twitter} alt="Twitter icon" width={28} height={28} />
                </a>
                <a
                  href="https://linkedin.com"
                  className={styles.social_item}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn"
                >
                  <Image src={linkedin} alt="LinkedIn icon" width={28} height={28} />
                </a>
              </nav>
            </address>

            <nav className={styles.company_links} aria-label="Footer Navigation">
              <div className={styles.link}>
                <h3>Products</h3>
                <ul>
                  <li><a href="/products/analytics">Product Analytics</a></li>
                  <li><a href="/products/agent">Tracing Agent</a></li>
                  <li><a href="/products/pipeline">Data Pipeline</a></li>
                  <li><a href="/products/gatekeeper">Gatekeeper</a></li>
                </ul>
              </div>
              <div className={styles.link}>
                <h3>Company</h3>
                <ul>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Tracewit. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className={styles.footer_glow} aria-hidden="true"></div>
    </footer>
  );
}
