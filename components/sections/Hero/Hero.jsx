import styles from "./Hero.module.css";
import Image from "next/image";
import Avatar1 from "@/public/images/Avatar1.png";
import Avatar2 from "@/public/images/Avatar2.png";
import Avatar3 from "@/public/images/Avatar3.png";
import Avatar4 from "@/public/images/Avatar4.png";
import Avatar5 from "@/public/images/Avatar5.png";
import HeroFlowingPipes from "@/public/svgs/HeroFlowingPipes";
import ArrowRight from "@/public/svgs/ArrowRight";
import CtaButton from "@/components/ui/CtaButton";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className="box">
        <div className={styles.hero_content}>
          <div className={styles.hero_top}>
            <div className={styles.avatar}>
              <Image src={Avatar1} alt="Community member 1" width={24} height={24} />
              <Image src={Avatar2} alt="Community member 2" width={24} height={24} />
              <Image src={Avatar3} alt="Community member 3" width={24} height={24} />
              <Image src={Avatar4} alt="Community member 4" width={24} height={24} />
              <Image src={Avatar5} alt="Community member 5" width={24} height={24} />
            </div>
            <h6>
              Join the <span>builders & believers</span>
            </h6>
          </div>
          <div className={styles.heading}>
            <h1 id="hero-title">
              Energize Your{" "}
              <span>
                {" "}
                Data
              </span>{" "}
              <br />
              Transform Fearlessly.
            </h1>
            <p>
              Unify A/B testing, observability, analytics, and data flow in one
              intelligent platform — no code changes, no data chaos.
            </p>
          </div>
          <form className={styles.email_container} aria-label="Join Waitlist Form">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
            <CtaButton variant="filled">Join Waitlist</CtaButton>
          </form>
          <div className={styles.flowing_lines}>
            <HeroFlowingPipes />
          </div>
        </div>
      </div>
    </section>
  );
}
