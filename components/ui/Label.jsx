import Image from "next/image";
import styles from "../../styles/components/ui/Label.module.css";
import Thunder from "@/public/images/thunder.png"; 

export default function Label({ text }) {
  return (
    <div className={styles.label}>
      <Image src={Thunder} alt="icon" width={18} height={18} />
      <h6>{text}</h6>
    </div>
  );
}
