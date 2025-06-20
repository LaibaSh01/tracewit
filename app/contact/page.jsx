import Header from "@/components/layout/Header/Header";
import styles from "../page.module.css";
import Faq from "@/components/sections/Faq/Faq";
import Footer from "@/components/layout/Footer/Footer";
import Contact from "@/components/sections/Contact/Contact";

export const metadata = {
  title: "Contact Tracewit | Get Support & Sales Information",
  description: "Reach out to our team for technical support, sales inquiries, or partnership opportunities. We offer hassle-free 24/7 support for our AI-powered analytics platform.",
  keywords: [
    "Tracewit contact",
    "analytics platform support",
    "A/B testing support",
    "data pipeline help",
    "technical inquiry"
  ],
}

export default function ContactPage() {
  return (
    <div className={styles.tracewit}>
      <main>
        <Header />
        <Contact />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}