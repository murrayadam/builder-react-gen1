"use client";
import React from "react";
import styles from "./styles.module.css";

interface TestimonialProps {
  quote?: string;
  author?: string;
  position?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  variant?: "card" | "minimal" | "centered";
}

function Testimonial({ 
  quote = "This product has completely transformed how we work. The team is more productive and our clients are happier than ever.",
  author = "Sarah Johnson",
  position = "Product Manager",
  company = "TechCorp Inc.",
  avatar = "https://via.placeholder.com/80x80/007bff/white?text=SJ",
  rating = 5,
  variant = "card"
}: TestimonialProps) {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${styles.star} ${i < rating ? styles.filled : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div className={`${styles.testimonial} ${styles[variant]}`}>
      {variant === "card" && (
        <div className={styles.card}>
          <div className={styles.rating}>
            {renderStars()}
          </div>
          <blockquote className={styles.quote}>
            "{quote}"
          </blockquote>
          <div className={styles.author}>
            <img src={avatar} alt={author} className={styles.avatar} />
            <div className={styles.authorInfo}>
              <div className={styles.name}>{author}</div>
              <div className={styles.details}>
                {position}{company ? ` at ${company}` : ''}
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === "minimal" && (
        <div className={styles.minimal}>
          <blockquote className={styles.quote}>
            "{quote}"
          </blockquote>
          <div className={styles.attribution}>
            — {author}, {position}{company ? ` at ${company}` : ''}
          </div>
        </div>
      )}

      {variant === "centered" && (
        <div className={styles.centered}>
          <img src={avatar} alt={author} className={styles.avatarLarge} />
          <div className={styles.rating}>
            {renderStars()}
          </div>
          <blockquote className={styles.quote}>
            "{quote}"
          </blockquote>
          <div className={styles.authorInfo}>
            <div className={styles.name}>{author}</div>
            <div className={styles.details}>
              {position}{company ? ` at ${company}` : ''}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonial;