import styles from "./Comparison.module.css";
import Image from "next/image";
import Logo from "@/public/images/Logo2.png";
import Building from "@/public/svgs/Building";
import Tick from "@/public/svgs/Tick";
import Cross from "@/public/svgs/Cross";
import Label from "@/components/ui/Label";

export default function Comparison() {
  return (
    <section className={styles.comparison} aria-labelledby="comparison-heading">
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Comparison" />
            <div className={styles.heading}>
              <h2 id="comparison-heading">
                Why <span>Tracewit</span> Stands Out
              </h2>
              <p>See how we compare against others in performance & growth.</p>
            </div>
          </div>
          <div className={styles.comparison_grid} role="table" aria-label="Feature comparison between Tracewit and competitors">
            <div className={styles.comparison_grid_item} role="rowgroup">
              <div className={styles.company_name} role="rowheader">
                <Image 
                  src={Logo} 
                  alt="Tracewit logo" 
                  width={24} 
                  height={24}
                  aria-hidden="true"
                />
                <h5>Tracewit</h5>
              </div>
              <div className={styles.comparison_list_container} role="rowgroup">
                <div className={styles.comparison_list} role="row">
                  {[
                    "Low-Code Experimentation",
                    "Auto Event Tracking",
                    "AI-Powered Insights",
                    "End-to-End Observability",
                    "Self-Learning Pipelines",
                    "Security Intelligence"
                  ].map((feature, index) => (
                    <div 
                      key={feature} 
                      className={styles.list_item} 
                      role="cell"
                      aria-label={`Tracewit ${feature}`}
                    >
                      <div className={styles.text}>
                        <Tick aria-hidden="true" />
                        <h6>{feature}</h6>
                      </div>
                      {index < 5 && <div className={styles.divider} aria-hidden="true"></div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.comparison_grid_item} role="rowgroup">
              <div className={styles.company_name} role="rowheader">
                <Building aria-hidden="true" />
                <h5>Others</h5>
              </div>
              <div
                className={`${styles.comparison_list_container} ${styles.others}`}
                role="rowgroup"
              >
                <div className={styles.comparison_list} role="row">
                  {[
                    "Requires manual integration",
                    "Manual coding required",
                    "Dependent on data teams & delayed reports",
                    "Fragmented toolchains",
                    "Static rules & manual configs",
                    "Security Intelligence"
                  ].map((feature, index) => (
                    <div 
                      key={feature} 
                      className={styles.list_item} 
                      role="cell"
                      aria-label={`Competitors ${feature}`}
                    >
                      <div className={styles.text}>
                        <Cross aria-hidden="true" />
                        <h6>{feature}</h6>
                      </div>
                      {index < 5 && <div className={styles.divider} aria-hidden="true"></div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}