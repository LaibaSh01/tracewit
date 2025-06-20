"use client";
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import styles from "./Advantages.module.css";
import Label from "@/components/ui/Label";

const Marquee = dynamic(
  () => import('react-fast-marquee'),
  { 
    ssr: false,
    loading: () => <div className={styles.marqueeFallback} />
  }
);

const Code = dynamic(() => import("@/public/svgs/Code"));
const Data = dynamic(() => import("@/public/svgs/Data"));
const BarChart = dynamic(() => import("@/public/svgs/BarChart"));
const Time = dynamic(() => import("@/public/svgs/Time"));
const Schema = dynamic(() => import("@/public/svgs/Schema"));
const Person = dynamic(() => import("@/public/svgs/Person"));
const Insights = dynamic(() => import("@/public/svgs/Insights"));
const DeveloperMode = dynamic(() => import("@/public/svgs/DeveloperMode"));
const CloudLock = dynamic(() => import("@/public/svgs/CloudLock"));
const Money = dynamic(() => import("@/public/svgs/Money"));

export default function Advantages() {
  const [firstRowAdvantages, secondRowAdvantages] = useMemo(() => {
    const firstRow = [
      {
        icon: <Code aria-hidden="true" />,
        title: "Low-Code Experimentation",
        description: "Launch A/B tests without engineering involvement",
      },
      {
        icon: <Data aria-hidden="true" />,
        title: "Flexible Data Destinations",
        description: "Route data to any lake, warehouse, or dashboard — no vendor lock-in",
      },
      {
        icon: <BarChart aria-hidden="true" />,
        title: "AI-Powered Product Analytics",
        description: "Natural language + LLM = instant answers and dashboards",
      },
      {
        icon: <Time aria-hidden="true" />,
        title: "Time-to-Value",
        description: "Setup in minutes, not days or weeks",
      },
      {
        icon: <Schema aria-hidden="true" />,
        title: "Auto Schema Detection",
        description: "Understands your data model instantly without setup pain",
      },
    ];

    const secondRow = [
      {
        icon: <Person aria-hidden="true" />,
        title: "Unified Observability & Testing",
        description: "Monitor user behavior, infra, and experiments from one platform",
      },
      {
        icon: <Insights aria-hidden="true" />,
        title: "Democratized Insights",
        description: "Product, marketing, and ops teams can self-serve without SQL",
      },
      {
        icon: <DeveloperMode aria-hidden="true" />,
        title: "Developer Experience",
        description: "Invisible agents, minimal integration, and native tracing",
      },
      {
        icon: <CloudLock aria-hidden="true" />,
        title: "Security Intelligence Built-in",
        description: "Out-of-the-box anomaly detection and policy-based data controls",
      },
      {
        icon: <Money aria-hidden="true" />,
        title: "Cost Efficiency",
        description: "Optimized pipelines reduce cloud and human cost over time",
      },
    ];

    return [firstRow, secondRow];
  }, []);

  return (
    <section
      id="teams"
      className={styles.advantages}
      aria-labelledby="advantages-heading"
    >
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
            <div
              key={`first-${iteration}`}
              className={styles.marquee_content}
              role="list"
            >
              {firstRowAdvantages.map((advantage, index) => (
                <div
                  key={`${advantage.title}-${index}`}
                  className={styles.card}
                  role="listitem"
                  aria-label={`${advantage.title}: ${advantage.description}`}
                >
                  <div className={styles.top_info}>
                    <div className={styles.icon_container}>
                      <div className={styles.inner_container}>
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
            <div
              key={`second-${iteration}`}
              className={styles.marquee_content}
              role="list"
            >
              {secondRowAdvantages.map((advantage, index) => (
                <div
                  key={`${advantage.title}-${index}`}
                  className={styles.card}
                  role="listitem"
                  aria-label={`${advantage.title}: ${advantage.description}`}
                >
                  <div className={styles.top_info}>
                    <div className={styles.icon_container}>
                      <div className={styles.inner_container}>
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