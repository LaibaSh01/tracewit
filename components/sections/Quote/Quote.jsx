import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className={styles.quote}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <h2>
              Turn Petabytes of Data into{" "}
              <span className={styles.gradient}>Insights</span> <br />
              <span className={styles.next_line}>
                with intelligent data command center
              </span>
            </h2>
            <div className={styles.bottom}>
              <div className={styles.insights_item}>
                <span className={styles.first}>Real-Time Analysis</span>
                <span className={styles.second}>AI-Powered Processing</span>
                <span className={styles.third}>Cloud Data Access</span>
                <span className={styles.fourth}>Enterprise Security</span>
              </div>
            </div>
            <div className={styles.quote_glow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
