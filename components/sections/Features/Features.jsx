import styles from "./Features.module.css";
import Image from "next/image";
import Thunder from "@/public/images/Thunder.png";
import Programming from "@/public/svgs/Programming";
import PulsingLogo from "@/public/svgs/PulsingLogo";
import CircleLogo from "@/public/images/CircleLogo.png";

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.label}>
              <Image src={Thunder} alt="thunder" width={18} />
              <h6>Features</h6>
            </div>
            <div className={styles.heading}>
              <h2>
                Built to <span>Replace</span> Complexity with Clarity
              </h2>
              <p>
                Tracewit brings analytics, observability, and experimentation
                into one no-code platform — for faster answers and smarter
                decisions.
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.feature_item}>
              <div className={styles.icon_container}>
                <div className={styles.inner_container}>
                  <Programming />
                </div>
              </div>
              <div className={styles.text}>
                <h4>Low-code setup</h4>
                <p>
                  Minimal integration—get started without deep code changes or
                  heavy SDKs.
                </p>
              </div>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.icon_container}>
                <div className={styles.inner_container}>
                  <Programming />
                </div>
              </div>
              <div className={styles.text}>
                <h4>One platform</h4>
                <p>
                  Unify analytics, experimentation, and observability—no need
                  for multiple vendors.
                </p>
              </div>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.icon_container}>
                <div className={styles.inner_container}>
                  <Programming />
                </div>
              </div>
              <div className={styles.text}>
                <h4>LLM-native analytics</h4>
                <p>
                  Use natural language to explore data—no SQL or dashboards
                  required.
                </p>
              </div>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.icon_container}>
                <div className={styles.inner_container}>
                  <Programming />
                </div>
              </div>
              <div className={styles.text}>
                <h4>Unified pipeline</h4>
                <p>
                  Streamline ETL, monitoring, and testing in a single,
                  integrated workflow.
                </p>
              </div>
            </div>

            <div className={styles.pulsing_logo}>
              <PulsingLogo />
              <Image src={CircleLogo} alt="circle logo" />
            </div>
            <div className={styles.divider}>
              <div className={styles.flowing_linear}></div>
            </div>
            <div className={`${styles.divider} ${styles.divider_left}`}>
              <div className={styles.flowing_linear}></div>
            </div>
            <div className={`${styles.divider} ${styles.divider_right}`}>
              <div className={styles.flowing_linear}></div>
            </div>
            <div className={`${styles.divider} ${styles.divider_bottom}`}>
              <div className={styles.flowing_linear}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
