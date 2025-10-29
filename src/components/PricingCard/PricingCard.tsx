"use client";
import React from "react";
import styles from "./styles.module.css";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title?: string;
  price?: number;
  currency?: string;
  period?: string;
  features?: Feature[];
  highlighted?: boolean;
  buttonText?: string;
  buttonUrl?: string;
}

function PricingCard({ 
  title = "Basic Plan",
  price = 29,
  currency = "$",
  period = "month",
  features = [
    { text: "5 Projects", included: true },
    { text: "10GB Storage", included: true },
    { text: "Email Support", included: true },
    { text: "Priority Support", included: false }
  ],
  highlighted = false,
  buttonText = "Get Started",
  buttonUrl = "#"
}: PricingCardProps) {
  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
      {highlighted && <div className={styles.badge}>Most Popular</div>}
      
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>
          <span className={styles.currency}>{currency}</span>
          <span className={styles.amount}>{price}</span>
          <span className={styles.period}>/{period}</span>
        </div>
      </div>

      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={`${styles.feature} ${feature.included ? styles.included : styles.excluded}`}>
            <span className={styles.icon}>
              {feature.included ? "✓" : "✗"}
            </span>
            {feature.text}
          </li>
        ))}
      </ul>

      <a href={buttonUrl} className={styles.button}>
        {buttonText}
      </a>
    </div>
  );
}

export default PricingCard;