import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "@/public/images/Logo.png";
import github from "@/public/images/github.png";
import twitter from "@/public/images/twitter.png";
import linkedin from "@/public/images/linkedin.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="box">
        <div className={styles.content}>

          <div className={styles.top}>
            <div className={styles.company_info}>
              <Image src={Logo} alt="logo" />
              <p>
                Your trusted partner in AI solutions, creating smarter systems
                for smarter businesses.
              </p>
              <div className={styles.social_logo}>
                <div className={styles.social_item}>
                  <Image
                    src={github}
                    alt="social icon"
                    width={28}
                    height={28}
                  />
                </div>
                <div className={styles.social_item}>
                  <Image
                    src={twitter}
                    alt="social icon"
                    width={28}
                    height={28}
                  />
                </div>
                <div className={styles.social_item}>
                  <Image
                    src={linkedin}
                    alt="social icon"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>

            <div className={styles.company_links}>
              <div className={styles.link}>
                <h6>Products</h6>
                <ul>
                  <li>Product Analytics</li>
                  <li>Tracing Agent</li>
                  <li>Data Pipeline</li>
                  <li>Gatekeeper</li>
                </ul>
              </div>
              <div className={styles.link}>
                <h6>Links</h6>
                <ul>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Changelog</li>
                  <li>Contact Us</li>
                  <li>Customers</li>
                  <li>Partners</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className={styles.link}>
                <h6>Resources</h6>
                <ul>
                  <li>Community</li>
                  <li>Docs</li>
                  <li>Guides</li>
                  <li>Help</li>
                  <li>Integrations</li>
                  <li>Pricing</li>
                  <li>Resources</li>
                  <li>Solutions Partners</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>&copy; 2025 Tracewit. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <div className={styles.footer_glow}></div>
    </footer>
  );
}
