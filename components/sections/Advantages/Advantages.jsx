"use client";
import Marquee from "react-fast-marquee";
import styles from "./Advantages.module.css";
import Label from "@/components/ui/Label";
import Code from "@/public/svgs/Code";
import Data from "@/public/svgs/Data";
import BarChart from "@/public/svgs/BarChart";
import Time from "@/public/svgs/Time";
import Schema from "@/public/svgs/Schema";
import Person from "@/public/svgs/Person";
import Insights from "@/public/svgs/Insights";
import DeveloperMode from "@/public/svgs/DeveloperMode";
import CloudLock from "@/public/svgs/CloudLock";
import Money from "@/public/svgs/Money";

const firstRowAdvantages = [
  {
    icon: <Code />,
    title: "Low-Code Experimentation",
    description: "Launch A/B tests without engineering involvement"
  },
  {
    icon: <Data />,
    title: "Flexible Data Destinations",
    description: "Route data to any lake, warehouse, or dashboard — no vendor lock-in"
  },
  {
    icon: <BarChart />,
    title: "AI-Powered Product Analytics",
    description: "Natural language + LLM = instant answers and dashboards"
  },
  {
    icon: <Time />,
    title: "Time-to-Value",
    description: "Setup in minutes, not days or weeks"
  },
  {
    icon: <Schema />,
    title: "Auto Schema Detection",
    description: "Understands your data model instantly without setup pain"
  }
];

const secondRowAdvantages = [
  {
    icon: <Person />,
    title: "Unified Observability & Testing",
    description: "Monitor user behavior, infra, and experiments from one platform"
  },
  {
    icon: <Insights />,
    title: "Democratized Insights",
    description: "Product, marketing, and ops teams can self-serve without SQL"
  },
  {
    icon: <DeveloperMode />,
    title: "Developer Experience",
    description: "Invisible agents, minimal integration, and native tracing"
  },
  {
    icon: <CloudLock />,
    title: "Security Intelligence Built-in",
    description: "Out-of-the-box anomaly detection and policy-based data controls"
  },
  {
    icon: <Money />,
    title: "Cost Efficiency",
    description: "Optimized pipelines reduce cloud and human cost over time"
  }
];

export default function Advantages() {
  return (
    <section id="teams" className={styles.advantages} aria-labelledby="advantages-heading">
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Advantages" />
            <div className={styles.heading}>
              <h2 id="advantages-heading">
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
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#000000"
          pauseOnHover={true}
          aria-hidden="true"
        >
          {[1, 2].map((iteration) => (
            <div key={`first-${iteration}`} className={styles.marquee_content} role="list">
              {firstRowAdvantages.map((advantage, index) => (
                <div 
                  key={`${advantage.title}-${index}`} 
                  className={styles.card}
                  role="listitem"
                  aria-label={advantage.title}
                >
                  <div className={styles.top_info}>
                    <div className={styles.icon_container}>
                      <div className={styles.inner_container} aria-hidden="true">
                        {advantage.icon}
                      </div>
                    </div>
                    <h6>{advantage.title}</h6>
                  </div>
                  <p>{advantage.description}</p>
                </div>
              ))}
            </div>
          ))}
        </Marquee>
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#000000"
          direction="right"
          pauseOnHover={true}
          aria-hidden="true"
        >
          {[1, 2].map((iteration) => (
            <div key={`second-${iteration}`} className={styles.marquee_content} role="list">
              {secondRowAdvantages.map((advantage, index) => (
                <div 
                  key={`${advantage.title}-${index}`} 
                  className={styles.card}
                  role="listitem"
                  aria-label={advantage.title}
                >
                  <div className={styles.top_info}>
                    <div className={styles.icon_container}>
                      <div className={styles.inner_container} aria-hidden="true">
                        {advantage.icon}
                      </div>
                    </div>
                    <h6>{advantage.title}</h6>
                  </div>
                  <p>{advantage.description}</p>
                </div>
              ))}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}