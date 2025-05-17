"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../../Styles/Carousel.module.css";
import SliderImages from "@/app/Utils/SliderImages";

const slides = [
  {
    title: "Adventure in Swiss Alps",
    description:
      "Experience breathtaking mountain views and thrilling outdoor activities",
    image: SliderImages.Slide1,
    buttonText: "Discover Switzerland",
  },
  {
    title: "Safari in Kenya",
    description: "Explore the wild side of Africa in style and comfort",
    image: SliderImages.Slide2,
    buttonText: "Discover Kenya",
  },
  {
    title: "Relax in Bali",
    description: "Enjoy serene beaches, vibrant culture, and peaceful retreats",
    image: SliderImages.Slide3,
    buttonText: "Discover Bali",
  },
];

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.image.src})` }}
            >
              <div className={styles.caption}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button>{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
