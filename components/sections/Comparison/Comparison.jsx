import styles from "./Comparison.module.css";
import Image from "next/image";
import Logo from "@/public/images/Logo2.png";
import Building from "@/public/svgs/Building";
import Tick from "@/public/svgs/Tick";
import Cross from "@/public/svgs/Cross";
import Label from "@/components/ui/Label";

export default function Comparison() {
  return (
    <section className={styles.comparison}>
      <div className="box">
        <div className={styles.comparison_content}>
          <div className={styles.comparison_top}>
           <Label text="Comparison" />
            <div className={styles.heading}>
              <h2>
                Why <span>Tracewit</span> Stands Out
              </h2>
              <p>See how we compare againts others in performance & growth.</p>
            </div>
          </div>
          <div className={styles.comparison_grid}>
            <div className={styles.comparison_grid_item}>
              <div className={styles.company_name}>
                <Image src={Logo} alt="Logo" width={24} />
                <h5>Tracewit</h5>
              </div>
              <div className={styles.comparison_list_container}>
                <div className={styles.comparison_list}>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Tick />
                      <h6>Low-Code Experimentation</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Tick />
                      <h6>Auto Event Tracking</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Tick />
                      <h6>AI-Powered Insights</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Tick />
                      <h6>End-to-End Observability</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Tick />
                      <h6>Self-Learning Pipelines</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Tick />
                      <h6>Security Intelligence</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.comparison_grid_item}>
              <div className={styles.company_name}>
                <Building />
                <h5>others</h5>
              </div>
              <div
                className={`${styles.comparison_list_container} ${styles.others}`}
              >
                <div className={styles.comparison_list}>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Cross />
                      <h6>Requires manual integration</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Cross />
                      <h6>Manual coding required</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Cross />
                      <h6>Dependent on data teams & delayed reports</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Cross />
                      <h6>Fragmented toolchains</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Cross />
                      <h6>Static rules & manual configs</h6>
                    </div>
                    <div className={styles.divider}></div>
                  </div>
                  <div className={styles.list_item}>
                    <div className={styles.text}>
                      <Cross />
                      <h6>Security Intelligence</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
