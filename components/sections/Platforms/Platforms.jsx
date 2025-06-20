import styles from "./Platforms.module.css";
import Label from "@/components/ui/Label";
import PlatformLayers from "@/public/svgs/PlatformLayers";

export default function Platforms() {
  return (
    <section
      id="platforms"
      className={styles.platforms}
      aria-labelledby="platforms-heading"
    >
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Platforms" />
            <div className={styles.heading}>
              <h2 id="platforms-heading">
                Tracewit <span>Platform</span> at a Glance
              </h2>
              <p>
                All-in-one experimentation, Analytics & observability platform
                designed for teams who value speed, clarity, and scale.
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={`${styles.filled_btn}`}>
              <div className={styles.background_gradient}>
                <div className={styles.main_btn_wrapper}>
                  <button
                    className={styles.main_btn}
                    aria-label="Learn more about Axon Flow"
                  >
                    Axon Flow
                  </button>
                </div>
              </div>
            </div>
            <PlatformLayers />
          </div>
        </div>
      </div>
    </section>
  );
}
