import { useEffect, useRef, useState } from 'react';
import { CarouselItem } from './CarouselItem';
import '../styles/Carousel.css';

export function Carousel({ title, items = [], onViewAll }) {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <button className="carousel__header" type="button" onClick={onViewAll}>
        <span className="carousel__title">{title}</span>
        <span className="carousel__view-all">view all →</span>
      </button>
      <div className="carousel__divider" />
      <div className={`carousel__track${isVisible ? ' carousel__track--animated' : ''}`}>
        {items.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
