"use client";
import Marquee from "react-fast-marquee";
import styles from "./Advantages.module.css";
import Image from "next/image";
import Thunder from "@/public/images/Thunder.png";
import Advantage1 from "@/public/images/Advantage1.png";
import Advantage2 from "@/public/images/Advantage2.png";
import Advantage3 from "@/public/images/Advantage3.png";
import Advantage4 from "@/public/images/Advantage4.png";

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.label}>
              <Image src={Thunder} alt="thunder" width={18} />
              <h6>Advantages</h6>
            </div>
            <div className={styles.heading}>
              <h2>
                Why Teams <span>Choose</span> Tracewit
              </h2>
              <p>
                Powerful capabilities that drive real business value. Our
                platform delivers what others promise, with less effort and more
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Marquee speed={50} gradient={true} gradientColor="#0b0b0b" pauseOnHover={true}>
          <div className={styles.marquee_content}>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage1} alt="advantage" />
                <h6>Low-Code Experimentation</h6>
              </div>
              <p>Launch A/B tests without engineering involvement</p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage2} alt="advantage" />
                <h6>Flexible Data Destinations</h6>
              </div>
              <p>
                Route data to any lake, warehouse, or dashboard — no vendor
                lock-in{" "}
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage3} alt="advantage" />
                <h6>AI-Powered Product Analytics</h6>
              </div>
              <p>Natural language + LLM = instant answers and dashboards</p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage4} alt="advantage" />
                <h6>Time-to-Value</h6>
              </div>
              <p>
                Setup in minutes, not days or weeks, Setup in minutes, not days
                or weeks
              </p>
            </div>
          </div>
          <div className={styles.marquee_content}>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage1} alt="advantage" />
                <h6>Low-Code Experimentation</h6>
              </div>
              <p>Launch A/B tests without engineering involvement</p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage2} alt="advantage" />
                <h6>Flexible Data Destinations</h6>
              </div>
              <p>
                Route data to any lake, warehouse, or dashboard — no vendor
                lock-in{" "}
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage3} alt="advantage" />
                <h6>AI-Powered Product Analytics</h6>
              </div>
              <p>Natural language + LLM = instant answers and dashboards</p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage4} alt="advantage" />
                <h6>Time-to-Value</h6>
              </div>
              <p>
                Setup in minutes, not days or weeks, Setup in minutes, not days
                or weeks
              </p>
            </div>
          </div>
        </Marquee>
        <Marquee speed={50} gradient={true} gradientColor="#0b0b0b" direction="right" pauseOnHover={true}>
          <div className={styles.marquee_content}>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage1} alt="advantage" />
                <h6>Low-Code Experimentation</h6>
              </div>
              <p>Launch A/B tests without engineering involvement</p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage2} alt="advantage" />
                <h6>Flexible Data Destinations</h6>
              </div>
              <p>
                Route data to any lake, warehouse, or dashboard — no vendor
                lock-in{" "}
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage3} alt="advantage" />
                <h6>AI-Powered Product Analytics</h6>
              </div>
              <p>Natural language + LLM = instant answers and dashboards</p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage4} alt="advantage" />
                <h6>Time-to-Value</h6>
              </div>
              <p>
                Setup in minutes, not days or weeks, Setup in minutes, not days
                or weeks
              </p>
            </div>
          </div>
          <div className={styles.marquee_content}>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage1} alt="advantage" />
                <h6>Low-Code Experimentation</h6>
              </div>
              <p>Launch A/B tests without engineering involvement</p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage2} alt="advantage" />
                <h6>Flexible Data Destinations</h6>
              </div>
              <p>
                Route data to any lake, warehouse, or dashboard — no vendor
                lock-in{" "}
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage3} alt="advantage" />
                <h6>AI-Powered Product Analytics</h6>
              </div>
              <p>Natural language + LLM = instant answers and dashboards</p>
            </div>
            <div className={styles.card}>
              <div className={styles.top_info}>
                <Image src={Advantage4} alt="advantage" />
                <h6>Time-to-Value</h6>
              </div>
              <p>
                Setup in minutes, not days or weeks, Setup in minutes, not days
                or weeks
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
