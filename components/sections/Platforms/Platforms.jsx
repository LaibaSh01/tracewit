import styles from "./Platforms.module.css";
import Image from "next/image";
import Thunder from "@/public/images/Thunder.png";
import ABProxy from "@/public/images/ABProxy.png";
import Grafwit from "@/public/images/Grafwit.png";
import Terrawit from "@/public/images/Terrawit.png";
import Streamwit from "@/public/images/Streamwit.png";
import LayerOne from "@/public/svgs/LayerOne";
import LayerTwo from "@/public/svgs/LayerTwo";

export default function Platforms() {
  return (
    <section className={styles.platforms}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.label}>
              <Image src={Thunder} alt="thunder" width={18} />
              <h6>Platforms</h6>
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
            <LayerOne />
            <div className={styles.platforms_logo_container}>
              <div className={styles.platform_logo_item}>
                <div className={styles.platform_logo_icon}>
                    <Image src={ABProxy} alt="ABwit"/>
                    
                </div>
                <span>ABwit</span>
              </div>
              <div className={styles.platform_logo_item}>
                <div className={styles.platform_logo_icon}>
                    <Image src={Grafwit} alt="Grafwit"/>
                    
                </div>
                <span>Grafwit</span>
              </div>
              <div className={styles.platform_logo_item}>
                <div className={styles.platform_logo_icon}>
                    <Image src={Terrawit} alt="Terrawit"/>
                    
                </div>
                <span>Terrawit</span>
              </div>
              <div className={styles.platform_logo_item}>
                <div className={styles.platform_logo_icon}>
                    <Image src={Streamwit} alt="Streamwit"/>
                    
                </div>
                <span>Streamwit</span>
              </div>
            </div>
            <LayerTwo />
          </div>
        </div>
      </div>
    </section>
  );
}
