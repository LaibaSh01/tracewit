import Header from "@/components/layout/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/sections/Hero/Hero";
import Product from "@/components/sections/Product/Product";
import Comparison from "@/components/sections/Comparison/Comparison";
import Advantages from "@/components/sections/Advantages/Advantages";
import Faq from "@/components/sections/Faq/Faq";
import CallToAction from "@/components/sections/CallToAction/CallToAction";
import Footer from "@/components/layout/Footer/Footer";
import Benefits from "@/components/sections/Benefits/Benefits";
import Metrics from "@/components/sections/Metrics/Metrics";
import Platforms from "@/components/sections/Platforms/Platforms";
import Features from "@/components/sections/Features/Features";
import Quote from "@/components/sections/Quote/Quote";

export const metadata = {
  title: "Tracewit | Unified AI-Powered A/B Testing & Analytics Platform",
  description: "No-code platform combining A/B testing, observability, analytics & data flow with AI-powered insights. Reduce engineering effort by 98%.",
  keywords: [
    "A/B testing platform",
    "no-code analytics",
    "AI-powered observability",
    "data pipeline",
    "product experimentation"
  ],
}

export default function Home() {
  return (
    <div className={styles.tracewit}>
      <main>
        <Header />
        <Hero />
        <Product />
        <Platforms />
        <Quote />
        <Metrics />
        <Comparison />
        <Advantages />
        <Benefits />
        <Features />
        <Faq />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}