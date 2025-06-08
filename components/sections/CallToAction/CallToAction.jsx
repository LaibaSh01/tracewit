import styles from "./CallToAction.module.css";
import LineArrow from "@/public/svgs/LineArrow";
import LinesRight from "@/public/svgs/LinesRight";
import LinesLeft from "@/public/svgs/LinesLeft";

export default function CallToAction() {
  return (
    <section className={styles.call_to_action}>
      <div className={styles.call_to_action_inner}>
        <div className={styles["line-left"]}>
          <LinesLeft />
        </div>

        <div className="box">
          <div className={styles.content_container}>
            <div className={styles.content_glow1}></div>
            <div className={styles.content_glow2}></div>
            <h2>
              Join the Future of Intelligent <span>Experimentation.</span>
            </h2>
            <p>
              Be among the first to experience no-code, AI-enhanced
              observability and testing. Limited early access spots available.
            </p>
            <button>
              Book a demo{" "}
              <span>
                <LineArrow />
              </span>
            </button>
          </div>
        </div>

        <div className={styles["line-right"]}>
          <LinesRight />
        </div>
      </div>
    </section>
  );
}
