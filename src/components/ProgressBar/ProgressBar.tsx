"use client";
import React from "react";
import styles from "./styles.module.css";

interface ProgressBarProps {
  value?: number;
  max?: number;
  color?: string;
  height?: number;
  showLabel?: boolean;
  animated?: boolean;
}

function ProgressBar({ 
  value = 50, 
  max = 100, 
  color = "#007bff", 
  height = 20, 
  showLabel = true,
  animated = false 
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.progressBar} ${animated ? styles.animated : ''}`}
        style={{ height: `${height}px` }}
      >
        <div 
          className={styles.fill}
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: color 
          }}
        />
      </div>
      {showLabel && (
        <span className={styles.label}>{Math.round(percentage)}%</span>
      )}
    </div>
  );
}

export default ProgressBar;