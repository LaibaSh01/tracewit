import styles from "./Benefits.module.css";
import DownGraph from "@/public/svgs/DownGraph";
import Settings from "@/public/svgs/Settings";
import Layer from "@/public/svgs/Layer";
import CloudChange from "@/public/svgs/CloudChange";
import Label from "@/components/ui/Label";

export default function Benefits() {
  return (
    <section id="benefits" className={styles.benefits} aria-labelledby="benefits-heading">
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Benefits" />
            <div className={styles.heading}>
              <h2 id="benefits-heading">
                Top 4 <span>Indicators</span> Across All Verticals
              </h2>
              <p>
                Proven results across teams — less engineering work, full
                coverage out-of-the-box, and instant insights with AI-powered
                metrics.
              </p>
            </div>
          </div>
          <div className={styles.container} role="list">
            <div className={styles.card} role="listitem">
              <div className={styles.icon_container}>
                <div className={styles.inner_container} aria-hidden="true">
                  <DownGraph />
                </div>
              </div>
              <div className={styles.text}>
                <h4>Reduced Engineering Effort</h4>
                <p>
                  <span aria-hidden="true">0</span>
                  <span className="sr-only">Zero</span> code changes for AB tests - Huge time/cost saver for Dev
                  teams
                </p>
              </div>
              <div className={styles.card_glow} aria-hidden="true"></div>
            </div>
            <div className={styles.card} role="listitem">
              <div className={styles.icon_container}>
                <div className={styles.inner_container} aria-hidden="true">
                  <Settings />
                </div>
              </div>
              <div className={styles.text}>
                <h4>Fewer Vendor Tools Needed</h4>
                <p>
                  Full observability out-of-box - Differentiates from
                  competitors
                </p>
              </div>
              <div className={styles.card_glow} aria-hidden="true"></div>
            </div>
            <div className={styles.card} role="listitem">
              <div className={styles.icon_container}>
                <div className={styles.inner_container} aria-hidden="true">
                  <Layer />
                </div>
              </div>
              <div className={styles.text}>
                <h4>Lower Operational Costs</h4>
                <p>
                  LLM-based dashboards - Democratizes analytics, fast insights
                </p>
              </div>
              <div className={styles.card_glow} aria-hidden="true"></div>
            </div>
            <div className={styles.card} role="listitem">
              <div className={styles.icon_container}>
                <div className={styles.inner_container} aria-hidden="true">
                  <CloudChange />
                </div>
              </div>
              <div className={styles.text}>
                <h4>Accelerated Workflows and Insights</h4>
                <p>
                  LLM-based dashboards - Democratizes analytics, fast insights
                </p>
              </div>
              <div className={styles.card_glow} aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}