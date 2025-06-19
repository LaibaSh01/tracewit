import styles from "@/styles/components/ui/FilledButton.module.css";

export default function FilledButton({ onClick, className = "", children = "Contact Us" }) {
  return (
    <div className={`${styles.filled_btn} ${className}`}>
      <div className={styles.background_gradient}>
        <div className={styles.main_btn_wrapper}>
          <button className={styles.main_btn} onClick={onClick}>
            {children}
          </button>
          <div className={styles.button_glow}></div>
        </div>
      </div>
    </div>
  );
}
