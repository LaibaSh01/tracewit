import styles from "./Platforms.module.css";
import Image from "next/image";
import ABProxy from "@/public/images/ABProxy.png";
import Grafwit from "@/public/images/Grafwit.png";
import Terrawit from "@/public/images/Terrawit.png";
import Streamwit from "@/public/images/Streamwit.png";
import LayerOne from "@/public/svgs/LayerOne";
import LayerTwo from "@/public/svgs/LayerTwo";
import Label from "@/components/ui/Label";
import PlatformLayers from "@/public/svgs/PlatformLayers";

export default function Platforms() {
  return (
    <section id="platforms" className={styles.platforms}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Platforms" />
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
            <PlatformLayers />
          </div>
        </div>
      </div>
    </section>
  );
}
