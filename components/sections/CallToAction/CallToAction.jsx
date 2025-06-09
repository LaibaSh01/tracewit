import styles from "./CallToAction.module.css";
import LineArrow from "@/public/svgs/LineArrow";
import LinesRight from "@/public/svgs/LinesRight";
import LinesLeft from "@/public/svgs/LinesLeft";

export default function CallToAction() {
  return (
    <section className={styles.call_to_action} aria-labelledby="cta-heading">
      <div className={styles.call_to_action_inner}>
        <div className={styles["line-left"]} aria-hidden="true">
          <LinesLeft />
        </div>

        <div className="box">
          <div className={styles.content_container}>
            <div className={styles.content_glow1} aria-hidden="true"></div>
            <div className={styles.content_glow2} aria-hidden="true"></div>
            <h2 id="cta-heading">
              Join the Future of Intelligent <span>Experimentation.</span>
            </h2>
            <p>
              Be among the first to experience no-code, AI-enhanced
              observability and testing. Limited early access spots available.
            </p>
            <button aria-label="Book a demo of Tracewit platform">
              Book a demo{" "}
              <span aria-hidden="true">
                <LineArrow />
              </span>
            </button>
          </div>
        </div>

        <div className={styles["line-right"]} aria-hidden="true">
          <LinesRight />
        </div>
      </div>
    </section>
  );
}