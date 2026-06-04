import React, { useState } from 'react';
import '../styles/Carousel.css';

function Carousel({ items, descriptions, centered }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel">
            <div className={`carouselContainer ${centered ? 'carouselContainerCentered' : ''}`}>
            <div className="carouselInner">
                {items.map((item, index) => {
                    // Determine the class based on the position relative to currentIndex
                    const position = 
                        index === currentIndex ? 'active' :
                        index === (currentIndex + 1) % items.length ? 'next' :
                        index === (currentIndex - 1 + items.length) % items.length ? 'prev' : 'inactive';
                    
                    return (
                        <div key={index} className={`carouselItem ${position}`}>
                            <img src={item} alt={`slide-${index}`} /> 
                            <div className="carouselDescriptionsMobile">
                {descriptions && descriptions.map((description, index) => (
                    <p 
                        key={index} 
                        className={`carouselDescriptionMobile ${index === currentIndex ? 'show' : 'hide'}`}
                    >
                        {description}
                    </p>
                ))}
            </div> 
                        </div>
                    );
                })}
                
                <button className="carouselControl prev" onClick={prevSlide}>
                <span className="material-symbols-rounded">
chevron_left
</span>
                </button>
                <button className="carouselControl next" onClick={nextSlide}>
                <span className="material-symbols-rounded">
chevron_right
</span>
                </button>
            </div>
            
            <div className="carouselDescriptions">
                {descriptions && descriptions.map((description, index) => (
                    <p 
                        key={index} 
                        className={`carouselDescription ${index === currentIndex ? 'show' : 'hide'}`}
                    >
                        {description}
                    </p>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Carousel;
