import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Anterior</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={goToNextSlide}>Siguiente</button>
    </div>
  );
};

export default Carousel;

