"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images?: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  height?: number;
}

function ImageCarousel({ 
  images = [
    { src: "https://via.placeholder.com/800x400/007bff/white?text=Slide+1", alt: "Slide 1", caption: "First slide" },
    { src: "https://via.placeholder.com/800x400/28a745/white?text=Slide+2", alt: "Slide 2", caption: "Second slide" },
    { src: "https://via.placeholder.com/800x400/dc3545/white?text=Slide+3", alt: "Slide 3", caption: "Third slide" }
  ],
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  height = 400
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images.length) return null;

  return (
    <div className={styles.carousel} style={{ height: `${height}px` }}>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className={styles.image}
        />
        
        {images[currentIndex].caption && (
          <div className={styles.caption}>
            {images[currentIndex].caption}
          </div>
        )}
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button 
            className={`${styles.arrow} ${styles.prev}`}
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button 
            className={`${styles.arrow} ${styles.next}`}
            onClick={goToNext}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;