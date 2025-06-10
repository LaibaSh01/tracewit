import ArrowRight from "@/public/svgs/ArrowRight";
import styles from "@/styles/components/ui/CtaButton.module.css";


const CtaButton = ({ children = "Join Waitlist", onClick, variant = "filled" }) => {
  const variantclassName = styles[`cta_button__${variant}`] || "";

  return (
    <button className={`${styles.cta_button} ${variantclassName}`} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight />
    </button>
  );
};

export default CtaButton;
