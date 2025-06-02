import Lines from "@/public/svgs/Lines";
import styles from "./CallToAction.module.css";
import LineArrow from "@/public/svgs/LineArrow";

export default function CallToAction() {
  return (
    <section className={styles.call_to_action}>
      <div className="box">
        <div className={styles.content_container}>
          <div className={styles.content_glow1}></div>
          <div className={styles.content_glow2}></div>
          <h2>
            Join the Future of Intelligent <span>Experimentation.</span>
          </h2>
          <p>
            Be among the first to experience no-code, AI-enhanced observability
            and testing. Limited early access spots available.
          </p>
          <button>Book a demo <span><LineArrow /></span> </button>
        </div>
      </div>
      <Lines />
    </section>
  );
}
