"use client";
import { useState } from "react";
import styles from "../sections/Contact/Contact.module.css";
import DownArrow from "@/public/svgs/DownArrow";

export default function Dropdown({ label, options, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.input_container}>
      <label>{label}</label>

      <div
        className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        <input type="text" value={selectedOption} readOnly />
        <DownArrow
          className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`}
        />
      </div>

      {isOpen && (
        <ul className={styles.dropdown_menu}>
          {options.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className={
                selectedOption === item ? styles.activeOption : ""
              }
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
