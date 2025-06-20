"use client";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Label from "@/components/ui/Label";
import styles from "./Contact.module.css";
import Image from "next/image";
import Thunder from "@/public/images/Thunder.png";

const Email = dynamic(() => import("@/public/svgs/Email"));
const Dropdown = dynamic(() => import("@/components/ui/Dropdown"));

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("General Inquiry");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const contactCards = useMemo(
    () => [
      {
        icon: <Email aria-hidden="true" />,
        title: "Reach Out to Us!",
        description: "Have questions? We're here to help reach out!",
        email: "hello@abproxy.com",
      },
      {
        icon: <Email aria-hidden="true" />,
        title: "Contact Sales",
        description: "Let's collaborate on custom solutions.",
        email: "sales@abproxy.com",
      },
    ],
    []
  );

  const formFields = useMemo(
    () => [
      { type: "text", name: "name", label: "Name", placeholder: "Laiba S." },
      {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "hello@abproxy.com",
      },
      {
        type: "textarea",
        name: "message",
        label: "Message",
        placeholder: "write a message",
      },
    ],
    []
  );

  return (
    <section className={styles.contact} aria-labelledby="contact-heading">
      <div className="box">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.top}>
              <div className={styles.heading}>
                <Label text="Collaborate with Us" />
                <h2 id="contact-heading">
                  We're Here for <span>You!</span>
                </h2>
              </div>
              <div className={styles.support_info}>
                <div className={styles.info_item}>
                  <Image
                    src={Thunder}
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                  <h6>Hassle-Free Support: Link with our crew anytime</h6>
                </div>
                <div className={styles.info_item}>
                  <Image
                    src={Thunder}
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                  <h6>24/7 Support: Witness our platform's performance</h6>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              {contactCards.map((card, index) => (
                <div key={`card-${index}`} className={styles.card}>
                  <div className={styles.icon_container}>
                    <div className={styles.inner_container} aria-hidden="true">
                      {card.icon}
                    </div>
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <a
                    href={`mailto:${card.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Email us at ${card.email}`}
                  >
                    {card.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <form className={styles.form} aria-label="Contact form">
              {/* Input fields (excluding textarea) */}
              {formFields
                .filter((field) => field.type !== "textarea")
                .map((field) => (
                  <div key={field.name} className={styles.input_container}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      aria-required="true"
                      required
                    />
                  </div>
                ))}

              <Dropdown
                label="Subject of Interest"
                options={[
                  "General Inquiry",
                  "Sales",
                  "Partnership",
                  "Technical Support",
                ]}
                defaultValue="General Inquiry"
                aria-label="Select subject of interest"
                required
              />

              <Dropdown
                label="Product"
                options={[
                  "A/B Testing",
                  "Analytics",
                  "Data Flow",
                  "Observability",
                ]}
                defaultValue="A/B Testing"
                aria-label="Select product"
                required
              />

              {formFields
                .filter((field) => field.type === "textarea")
                .map((field) => (
                  <div key={field.name} className={styles.input_container}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={6}
                      className={styles.textarea}
                      aria-required="true"
                      required
                    ></textarea>
                  </div>
                ))}

              <button
                type="submit"
                className={styles.submit_button}
                aria-label="Submit contact form"
              >
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
