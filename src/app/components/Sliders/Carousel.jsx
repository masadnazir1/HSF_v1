"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AnimatedButton from "../Buttons/AnimatedButton";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../../Styles/Carousel.module.css";
import SliderImages from "@/app/Utils/SliderImages";

const slides = [
  {
    title: "Explore the Majestic Hunza Valley",
    description:
      "Discover breathtaking mountain views, ancient forts, and warm hospitality in Gilgit-Baltistan.",
    image: SliderImages.Slide2, // replace with your image ref
    buttonText: "Discover Hunza",
  },
  {
    title: "Adventure Awaits in Skardu",
    description:
      "Experience serene lakes, rugged peaks, and thrilling trekking routes in the heart of the Karakoram.",
    image: SliderImages.Slide1,
    buttonText: "Discover Skardu",
  },
  {
    title: "Relax Amidst Swat Valley’s Green Beauty",
    description:
      "Unwind in the lush landscapes and peaceful rivers of the Switzerland of the East.",
    image: SliderImages.Slide3,
    buttonText: "Discover Swat",
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
                <AnimatedButton>{slide.buttonText}</AnimatedButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
