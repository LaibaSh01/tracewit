import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "@/public/images/Logo.png";
import FilledButton from "@/components/ui/FilledButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="box">
        <div className={styles.header_content}>
          <Image src={Logo} alt="Tracewit Logo" />
          <nav className={styles.nav}>
            <ul>
              <li>Features</li>
              <li>Resources</li>
              <li>Prices</li>
              <li>Faqs</li>
              <li>Teams</li>
            </ul>
          </nav>
          <FilledButton />
        </div>
      </div>
    </header>
  );
}
