import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Default Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles (if needed)
import '../Sewslider/swiper.css'; // Custom CSS file
import { Navigation } from 'swiper'; // Import Navigation from Swiper
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

const Sewslider = () => {
  const swiperRef = useRef(null); // Create a reference to the Swiper instance
  const scrollTimeoutRef = useRef(null); // Reference to store timeout ID
  const autoSlideIntervalRef = useRef(null); // Reference for the auto-slide interval

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleWheel = (event) => {
    // Prevent default scrolling
    event.preventDefault();

    // Clear any existing timeout to debounce
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set a timeout to control how frequently slides change

    // Reset auto-slide interval
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    autoSlideIntervalRef.current = setInterval(() => {
      slideNext();
    }, 2000); // Resume auto-slide every 2 seconds
  };

  const handleMouseEnter = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current); // Pause auto-slide on hover
    }
  };

  const handleMouseLeave = () => {
    resetAutoSlide(); // Resume auto-slide when mouse leaves
  };

  useEffect(() => {
    // Add wheel event listener
    window.addEventListener('wheel', handleWheel);

    // Start automatic sliding every 2 seconds
    autoSlideIntervalRef.current = setInterval(() => {
      slideNext();
    }, 2000); // Change slide every 2 seconds

    // Cleanup event listeners and intervals on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeoutRef.current); // Clear timeout on unmount
      clearInterval(autoSlideIntervalRef.current); // Clear the auto-slide interval
    };
  }, []);

  return (
    <div
      className="swiper-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={slidePrev} className="custom-nav-button">
      <IoIosArrowBack style={{ color: '#7a55c1', top: '50%' }} />

            </button>
      
      <Swiper
        ref={swiperRef} // Assign the reference to Swiper
        style={{ maxWidth: '90%' }}
        spaceBetween={50}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        navigation={false} // Disable the default navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index} className="slide">
            <div className={`card ${index === 2 ? 'unique-center' : ''}`}>
              Slide {index + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={slideNext} className="custom-nav-button">
      <IoIosArrowForward style={{ color: '#7a55c1', top: '50%' }} />
</button>
    </div>
  );
};

export default Sewslider;
