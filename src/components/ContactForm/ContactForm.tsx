"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  showCompany?: boolean;
  showMessage?: boolean;
  submitText?: string;
  successMessage?: string;
  layout?: "vertical" | "horizontal";
}

function ContactForm({ 
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  showPhone = true,
  showCompany = false,
  showMessage = true,
  submitText = "Send Message",
  successMessage = "Thank you! We'll get back to you soon.",
  layout = "vertical"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Message Sent!</h3>
        <p className={styles.successMessage}>{successMessage}</p>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${styles[layout]}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.field}>
            <label className={styles.label}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        {(showPhone || showCompany) && (
          <div className={styles.row}>
            {showPhone && (
              <div className={styles.field}>
                <label className={styles.label}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            )}
            
            {showCompany && (
              <div className={styles.field}>
                <label className={styles.label}>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            )}
          </div>
        )}

        {showMessage && (
          <div className={styles.field}>
            <label className={styles.label}>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows={5}
              required
            />
          </div>
        )}

        <button 
          type="submit" 
          className={styles.submit}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : submitText}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;