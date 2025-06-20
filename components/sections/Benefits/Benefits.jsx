import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import styles from "./Benefits.module.css";
import Label from "@/components/ui/Label";

const DownGraph = dynamic(() => import("@/public/svgs/DownGraph"));
const Settings = dynamic(() => import("@/public/svgs/Settings"));
const Layer = dynamic(() => import("@/public/svgs/Layer"));
const CloudChange = dynamic(() => import("@/public/svgs/CloudChange"));

export default function Benefits() {
  const benefits = useMemo(() => [
    {
      icon: <DownGraph aria-hidden="true" />,
      title: "Reduced Engineering Effort",
      description: "0 code changes for AB tests - Huge time/cost saver for Dev teams",
      zeroText: "Zero"
    },
    {
      icon: <Settings aria-hidden="true" />,
      title: "Fewer Vendor Tools Needed",
      description: "Full observability out-of-box - Differentiates from competitors"
    },
    {
      icon: <Layer aria-hidden="true" />,
      title: "Lower Operational Costs",
      description: "LLM-based dashboards - Democratizes analytics, fast insights"
    },
    {
      icon: <CloudChange aria-hidden="true" />,
      title: "Accelerated Workflows and Insights",
      description: "LLM-based dashboards - Democratizes analytics, fast insights"
    }
  ], []);

  return (
    <section 
      id="benefits" 
      className={styles.benefits} 
      aria-labelledby="benefits-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Benefits" />
            <div className={styles.heading}>
              <h2 id="benefits-heading" itemProp="name">
                Top 4 <span>Indicators</span> Across All Verticals
              </h2>
              <p itemProp="description">
                Proven results across teams — less engineering work, full
                coverage out-of-the-box, and instant insights with AI-powered
                metrics.
              </p>
            </div>
          </div>
          <div className={styles.container} role="list" itemScope itemProp="itemListElement">
            {benefits.map((benefit, index) => (
              <div 
                key={`benefit-${index}`}
                className={styles.card} 
                role="listitem"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={index + 1} />
                <div className={styles.icon_container}>
                  <div className={styles.inner_container} aria-hidden="true">
                    {benefit.icon}
                  </div>
                </div>
                <div className={styles.text}>
                  <h4 itemProp="name">{benefit.title}</h4>
                  <p itemProp="description">
                    {benefit.zeroText && (
                      <>
                        <span aria-hidden="true">0</span>
                        <span className="sr-only">{benefit.zeroText}</span>
                      </>
                    )}
                    {benefit.description}
                  </p>
                </div>
                <div className={styles.card_glow} aria-hidden="true"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}