import styles from "./Faq.module.css";
import Image from "next/image";
import Thunder from "@/public/images/Thunder.png";
import Minus from "@/public/svgs/Minus";
import Plus from "@/public/svgs/Plus";

export default function Faq() {
  return (
    <section className={styles.faqs}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.label}>
              <Image src={Thunder} alt="thunder" width={18} />
              <h6>FAQs</h6>
            </div>
            <div className={styles.heading}>
              <h2>
                Your Questions, <span>Answered.</span>
              </h2>
              <p>
                Explore answers to the most common questions about our tools and
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.question_item}>
          <div className={styles.question}>
            <h6>
              What makes Tracewit different from other A/B testing platforms?
            </h6>
            <Minus />
          </div>
          <p className={styles.answer}>
            Unlike traditional platforms, Tracewit requires zero code changes.
            Our intelligent agent automatically handles experiment routing,
            event collection, and data analysis — all without burdening your
            developers or data teams.
          </p>
          <div className={styles.faq_glow}></div>
        </div>
        <div className={styles.question_item}>
          <div className={styles.question}>
            <h6 className={styles.collapsed}>
              Do I need a data engineering or analytics team to use Tracewit?
            </h6>
            <Plus />
          </div>
          <div className={`${styles.faq_glow} ${styles.second}`}></div>
        </div>
        <div className={styles.question_item}>
          <div className={styles.question}>
            <h6 className={styles.collapsed}>
              How does Tracewit collect data without impacting my system's
              performance?
            </h6>
            <Plus />
          </div>
          <div className={`${styles.faq_glow} ${styles.third}`}></div>
        </div>
        <div className={styles.question_item}>
          <div className={styles.question}>
            <h6 className={styles.collapsed}>
              Can I control what data the Tracewit agent collect?
            </h6>
            <Plus />
          </div>
          <div className={`${styles.faq_glow} ${styles.fourth}`}></div>
        </div>
        <div className={styles.question_item}>
          <div className={styles.question}>
            <h6 className={styles.collapsed}>
              Can I control what data the Tracewit agent collect?
            </h6>
            <Plus />
          </div>
          <div className={`${styles.faq_glow} ${styles.fifth}`}></div>
        </div>
      </div>
    </section>
  );
}
