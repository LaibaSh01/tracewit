import GridLines from "@/public/svgs/GridLines";
import styles from "./Hero.module.css";
import Image from "next/image";
import Avatar1 from "@/public/images/Avatar1.png";
import Avatar2 from "@/public/images/Avatar2.png";
import Avatar3 from "@/public/images/Avatar3.png";
import Avatar4 from "@/public/images/Avatar4.png";
import Avatar5 from "@/public/images/Avatar5.png";
import CircleDoodle from "@/public/svgs/CircleDoodle";
import FlowingPipes from "@/public/svgs/FlowingPipes";
import FlowingPipesLeft from "@/public/svgs/FlowingPipesLeft";
import Logo2 from "@/public/images/Logo2.png";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* <GridLines /> */}
      <div className="box">
        <div className={styles.hero_content}>
          <div className={styles.hero_top}>
            <div className={styles.avatar}>
              <Image src={Avatar1} alt="avatar" width={24} height={24} />
              <Image src={Avatar2} alt="avatar" width={24} height={24} />
              <Image src={Avatar3} alt="avatar" width={24} height={24} />
              <Image src={Avatar4} alt="avatar" width={24} height={24} />
              <Image src={Avatar5} alt="avatar" width={24} height={24} />
            </div>
            <h6>
              Join the <span>builders & believers</span>
            </h6>
          </div>
          <div className={styles.heading}>
            <h1>
              Energize Your{" "}
              <span>
                {" "}
                {/* Data, <CircleDoodle /> */}
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
          <div className={styles.email_container}>
            <input type="email" placeholder="Enter your email address" />
            <button className={styles.cta_button}>Join Now</button>
          </div>
          <div className={styles.flowing_lines}>
            <FlowingPipesLeft />
            <Image src={Logo2} alt="Logo" />
            <FlowingPipes />
          </div>
        </div>
      </div>
    </section>
  );
}
