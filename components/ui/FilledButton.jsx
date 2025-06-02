import styles from "@/styles/components/ui/FilledButton.module.css";

export default function FilledButton() {
  return (
    <div className={styles.filled_btn}>
            <div className={styles.background_gradient}>
              <div className={styles.main_btn_wrapper}>
                <button className={styles.main_btn}>Book a Demo</button>
                <div className={styles.button_glow}></div>
              </div>
            </div>
          </div>
  );
}
