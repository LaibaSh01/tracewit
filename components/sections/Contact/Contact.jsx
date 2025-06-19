"use client";
import Label from "@/components/ui/Label";
import styles from "./Contact.module.css";
import Image from "next/image";
import Thunder from "@/public/images/Thunder.png";
import Email from "@/public/svgs/Email";
import Dropdown from "@/components/ui/Dropdown";
import { useState } from "react";
import CtaButton from "@/components/ui/CtaButton";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("General Inquiry");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <section className={styles.contact}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.top}>
              <div className={styles.heading}>
                <Label text="Collaborate with Us" />
                <h2 id="heading">
                  We’re Here for <span>You!</span>
                </h2>
              </div>
              <div className={styles.support_info}>
                <div className={styles.info_item}>
                  <Image
                    src={Thunder}
                    alt="Thunder icon"
                    width={18}
                    height={18}
                  />
                  <h6>Hassle-Free Support: Link with our crew anytime</h6>
                </div>
                <div className={styles.info_item}>
                  <Image
                    src={Thunder}
                    alt="Thunder icon"
                    width={18}
                    height={18}
                  />
                  <h6>24/7 Support: Witness our platform's performance</h6>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.card}>
                <div className={styles.icon_container}>
                  <div className={styles.inner_container} aria-hidden="true">
                    <Email />
                  </div>
                </div>
                <h4>React Out to Us!</h4>
                <p>Have questions? We're here to help reach out!</p>
                <a
                  href="mailto:hello@abproxy.com"
                  target="_blank"
                  rel="noopener"
                >
                  hello@abproxy.com
                </a>
              </div>
              <div className={styles.card}>
                <div className={styles.icon_container}>
                  <div className={styles.inner_container} aria-hidden="true">
                    <Email />
                  </div>
                </div>
                <h4>Contact Sales</h4>
                <p>Let’s collaborate on custom solutions.</p>
                <a
                  href="mailto:sales@abproxy.com"
                  target="_blank"
                  rel="noopener"
                >
                  sales@abproxy.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <form className={styles.form}>
              <div className={styles.input_container}>
                <label>Name</label>
                <input type="text" placeholder="Laiba S." />
              </div>
              <div className={styles.input_container}>
                <label>Email</label>
                <input type="email" placeholder="hello@abproxy.com" />
              </div>
              <Dropdown
                label="Subject of Interest"
                options={[
                  "General Inquiry",
                  "Sales",
                  "Partnership",
                  "Technical Support",
                ]}
                defaultValue="General Inquiry"
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
              />
              <div className={styles.input_container}>
                <label>Message</label>
                <textarea
                  placeholder="Write a message"
                  rows={6}
                  className={styles.textarea}
                ></textarea>
              </div>
            </form>
            <button className={`${styles.submit_button}`}>
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
