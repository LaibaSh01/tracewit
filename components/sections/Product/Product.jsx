import styles from "./Product.module.css";
import Product3 from "@/public/svgs/Product3";
import ArrowRight from "@/public/svgs/ArrowRight";
import Label from "@/components/ui/Label";

export default function Product() {
  const productFeatures = [
    {
      id: 1,
      title: "Unified Tracing Agent",
      description: "Full visibility across services and APIs. Detect risks and bottlenecks automatically. Say goodbye to hard-coded event tracking. Our deployed agent passively collects requests, responses, user activity, and service metrics — no engineering effort required. Filter what it collects straight from the UI.",
      media: (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video_element}
          aria-label="Demonstration of Unified Tracing Agent"
        >
          <source src="/images/Product1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ),
      mediaPosition: "left"
    },
    {
      id: 2,
      title: "Full Stack Observability",
      description: "Full visibility across services and APIs. Detect risks and bottlenecks automatically. Say goodbye to hard-coded event tracking. Our deployed agent passively collects requests, responses, user activity, and service metrics — no engineering effort required. Filter what it collects straight from the UI.",
      media: <Product3 aria-label="Full stack Observability illustration" />,
      mediaPosition: "right",
      customClass: styles.product_custom
    },
    {
      id: 3,
      title: "LLM-Powered Product & Security Analytics",
      description: "No need for a data team. Ask questions like 'What's the conversion rate for Feature A vs Feature B?' and get instant, AI-generated dashboards. Metrics and KPIs are just a question away.",
      media: (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`${styles.video_element} ${styles.chat_video}`}
          aria-label="Demonstration of LLM-Powered Analytics"
        >
          <source src="/images/Chat.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
      mediaPosition: "left"
    },
    {
      id: 4,
      title: "Data Pipeline",
      description: "Ship your data anywhere — your warehouse, your lake, your dashboard. Our pipelines understand your schema and structure automatically. You control the destination; we handle the rest.",
      media: (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video_element}
          aria-label="Demonstration of Data Pipeline"
        >
          <source src="/images/Product3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
      mediaPosition: "right",
      customClass: styles.product3
    }
  ];

  return (
    <section className={styles.product} aria-labelledby="product-heading">
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Products" />
            <div className={styles.heading}>
              <h2 id="product-heading">
                Tracewit <span>Platform</span> at a Glance
              </h2>
              <p>
                All-in-one experimentation, analytics & observability platform
                designed for teams who value speed, clarity, and scale.
              </p>
            </div>
          </div>
          <div className={styles.container}>
            {productFeatures.map((feature) => (
              <div key={feature.id} className={styles.product_item}>
                {feature.mediaPosition === "left" && (
                  <div className={styles.product_video}>
                    {feature.media}
                  </div>
                )}
                <div className={styles.product_info}>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <a href="#learn-more" aria-label={`Learn more about ${feature.title}`}>
                    Learn more <ArrowRight aria-hidden="true" />
                  </a>
                </div>
                {feature.mediaPosition === "right" && (
                  <div className={`${styles.product_video} ${feature.customClass || ''}`}>
                    {feature.media}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}