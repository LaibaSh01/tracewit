import styles from "./Features.module.css";
import Image from "next/image";
import Programming from "@/public/svgs/Programming";
import PulsingLogo from "@/public/svgs/PulsingLogo";
import CircleLogo from "@/public/images/CircleLogo.png";
import Platform from "@/public/svgs/Platform";
import Analytics from "@/public/svgs/Analytics";
import Pipeline from "@/public/svgs/Pipeline";
import Label from "@/components/ui/Label";

export default function Features() {
  return (
    <section className={styles.features} aria-labelledby="features-heading">
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Features" />
            <div className={styles.heading}>
              <h2 id="features-heading">
                Built to <span>Replace</span> Complexity with Clarity
              </h2>
              <p>
                Tracewit brings analytics, observability, and experimentation
                into one no-code platform — for faster answers and smarter
                decisions.
              </p>
            </div>
          </div>
          <div className={styles.container} role="list">
            <div className={styles.feature_item} role="listitem" aria-labelledby="feature1">
              <div className={styles.icon_container} aria-hidden="true">
                <div className={styles.inner_container}>
                  <Programming aria-label="Low-code setup icon" />
                </div>
              </div>
              <div className={styles.text}>
                <h4 id="feature1">Low-code setup</h4>
                <p>
                  Minimal integration—get started without deep code changes or
                  heavy SDKs.
                </p>
              </div>
            </div>
            <div className={styles.feature_item} role="listitem" aria-labelledby="feature2">
              <div className={styles.icon_container} aria-hidden="true">
                <div className={styles.inner_container}>
                  <Platform aria-label="One platform icon" />
                </div>
              </div>
              <div className={styles.text}>
                <h4 id="feature2">One platform</h4>
                <p>
                  Unify analytics, experimentation, and observability—no need
                  for multiple vendors.
                </p>
              </div>
            </div>
            <div className={styles.feature_item} role="listitem" aria-labelledby="feature3">
              <div className={styles.icon_container} aria-hidden="true">
                <div className={styles.inner_container}>
                  <Analytics aria-label="LLM-native analytics icon" />
                </div>
              </div>
              <div className={styles.text}>
                <h4 id="feature3">LLM-native analytics</h4>
                <p>
                  Use natural language to explore data—no SQL or dashboards
                  required.
                </p>
              </div>
            </div>
            <div className={styles.feature_item} role="listitem" aria-labelledby="feature4">
              <div className={styles.icon_container} aria-hidden="true">
                <div className={styles.inner_container}>
                  <Pipeline aria-label="Unified pipeline icon" />
                </div>
              </div>
              <div className={styles.text}>
                <h4 id="feature4">Unified pipeline</h4>
                <p>
                  Streamline ETL, monitoring, and testing in a single,
                  integrated workflow.
                </p>
              </div>
            </div>
            <div className={styles.pulsing_logo_wrapper} aria-hidden="true">
              <div className={styles.pulsing_logo}>
                <Image 
                  src={CircleLogo} 
                  alt="" 
                  aria-hidden="true"
                />
                <span className={styles.pulse_ring}></span>
              </div>
            </div>

            <div className={styles.divider} aria-hidden="true">
              <div className={styles.flowing_linear}></div>
            </div>
            <div className={`${styles.divider} ${styles.divider_left}`} aria-hidden="true">
              <div className={styles.flowing_linear}></div>
            </div>
            <div className={`${styles.divider} ${styles.divider_right}`} aria-hidden="true">
              <div className={styles.flowing_linear}></div>
            </div>
            <div className={`${styles.divider} ${styles.divider_bottom}`} aria-hidden="true">
              <div className={styles.flowing_linear}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}