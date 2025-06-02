import Image from "next/image";
import styles from "./Product.module.css";
import Thunder from "@/public/images/Thunder.png";
import Product3 from "@/public/svgs/Product3";
import TechLogo1 from "@/public/images/TechLogo1.png";
import TechLogo2 from "@/public/images/TechLogo2.png";
import TechLogo3 from "@/public/images/TechLogo3.png";
import TechLogo4 from "@/public/images/TechLogo4.png";
import TechLogo5 from "@/public/images/TechLogo5.png";
import TechLogo6 from "@/public/images/TechLogo6.png";
import TechLogo7 from "@/public/images/TechLogo7.png";
import TechLogo8 from "@/public/images/TechLogo8.png";
import TechLogo9 from "@/public/images/TechLogo9.png";
import TechLogo10 from "@/public/images/TechLogo10.png";
import TechLogo12 from "@/public/images/TechLogo12.png";
import TechLogo13 from "@/public/images/TechLogo13.png";
import ProductLogo from "@/public/images/ProductLogo.png";
// import Product1 from "@/public/images/Product1.png";
// import Product3 from "@/public/images/Product3.png";
// import Chat from "@/public/images/Chat.mp4"

export default function Product() {
  return (
    <section className={styles.product}>
      <div className="box">
        <div className={styles.product_content}>
          <div className={styles.product_top}>
            <div className={styles.label}>
              <Image src={Thunder} alt="thunder" width={18} />
              <h6>Products</h6>
            </div>
            <div className={styles.heading}>
              <h2>
                Tracewit <span>Platform</span> at a Glance
              </h2>
              <p>
                All-in-one experimentation, Analytics & observability platform
                designed for teams who value speed, clarity, and scale.
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.first_row}>
              <div className={`${styles.grid_item} ${styles.first_item}`}>
                <div className={styles.product_info}>
                  <h4>Low-Code A/B Testing Agent</h4>
                  <p>
                    Experiment at the infrastructure level with zero code
                    changes. Whether it is server-side or UI-based, our agent
                    handles everything — from resolver injection to metric
                    collection. Use AI for multivariate testing and let it
                    optimize your variables.
                  </p>
                </div>
                <div className={styles.product_video}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video_element}
                  >
                    <source src="/images/Product1.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className={`${styles.grid_item} ${styles.second_item}`}>
                <div className={styles.product_info}>
                  <h4>Unified Tracing Agent</h4>
                  <p>
                    Full visibility across services and APIs, Detect risks and
                    bottlenecks automatically. Say goodbye to hard-coded event
                    tracking. Our deployed agent passively collects requests,
                    responses, user activity, and service metrics — no
                    engineering effort required. Filter what it collects
                    straight from the UI.
                  </p>
                </div>
                <div
                  className={`${styles.product_video} ${styles.product_custom}`}
                >
                  <div className={styles.tech_logo}>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo1}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo2}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo3}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo4}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo5}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo6}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo7}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo8}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo9}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo10}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo12}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        src={TechLogo13}
                        alt="tech-logo"
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                  <Product3 />
                  <Image src={ProductLogo} alt="product logo" width={48} height={48}/>
                </div>
              </div>
            </div>

            <div className={styles.second_row}>
              <div className={`${styles.grid_item} ${styles.third_item}`}>
                <div className={styles.product_info}>
                  <h4>LLM-Powered Analytics</h4>
                  <p>
                    No need for a data team. Ask questions like What's the
                    conversion rate for Feature A vs Feature B? and get instant,
                    AI-generated dashboards. Metrics and KPIs are just a
                    question away.
                  </p>
                </div>
                <div className={styles.product_video}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video_element}
                  >
                    <source src="/images/Product3.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className={`${styles.grid_item} ${styles.fourth_item}`}>
                <div className={styles.product_info}>
                  <h4>Data Pipeline</h4>
                  <p>
                    Ship your data anywhere — your warehouse, your lake, your
                    dashboard. Our pipelines understand your schema and
                    structure automatically. You control the destination; we
                    handle the rest.
                  </p>
                </div>
                <div className={styles.product_video}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video_element}
                  >
                    <source src="/images/Chat.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
