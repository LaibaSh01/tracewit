"use client";
import { useState } from "react";
import styles from "./Faq.module.css";
import Minus from "@/public/svgs/Minus";
import Plus from "@/public/svgs/Plus";
import Label from "@/components/ui/Label";

const faqData = [
  {
    question: "What makes Tracewit different from other A/B testing platforms?",
    answer:
      "Unlike traditional platforms, Tracewit requires zero code changes. Our intelligent agent automatically handles experiment routing, event collection, and data analysis — all without burdening your developers or data teams.",
  },
  {
    question: "Do I need a data engineering or analytics team to use Tracewit?",
    answer:
      "No! Tracewit's AI-driven platform analyzes your metrics automatically. Just ask questions in plain English, and our system will generate reports and dashboards for you — no SQL, no manual queries needed.",
  },
  {
    question:
      "How does Tracewit collect data without impacting my system's performance?",
    answer:
      "Our lightweight agent is optimized for minimal overhead. It passively traces requests and responses, filters the data you need, and securely ships it without slowing down your services.",
  },
  {
    question: "Can I control what data the Tracewit agent collects?",
    answer:
      "Yes! From our UI, you can filter which services, endpoints, or data points the agent should monitor — giving you full control over your data privacy and observability.",
  },
  {
    question: "Where can I send the data collected by Tracewit?",
    answer:
      "You have full flexibility. Tracewit can send your data to your own warehouse, your analytics platform, or stay within Tracewit — whichever fits your needs best.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className={styles.faqs} aria-labelledby="faq-heading">
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Faqs" />
            <div className={styles.heading}>
              <h2 id="faq-heading">
                Your Questions, <span>Answered.</span>
              </h2>
              <p>
                Explore answers to the most common questions about our tools and features.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <dl className={styles.dl}>
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;

                return (
                  <div key={index} className={styles.question_item} role="group">
                    <dt className={styles.dt}>
                      <div
                        className={styles.question}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        id={questionId}
                        onClick={() => toggleFaq(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleFaq(index);
                          }
                        }}
                      >
                        <h6 className={!isOpen ? styles.collapsed : ""}>
                          {item.question}
                        </h6>
                        {isOpen ? <Minus /> : <Plus />}
                      </div>
                    </dt>

                    <dd
                      className={`${styles.answer_wrapper} ${
                        isOpen ? styles.open : ""
                      }`}
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                    >
                      <p>{item.answer}</p>
                    </dd>

                    <div
                      className={`${styles.faq_glow} ${
                        styles[`glow_${index + 1}`] || ""
                      }`}
                      aria-hidden="true"
                    ></div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
