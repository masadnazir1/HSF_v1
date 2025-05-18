import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SliderImages from "@/app/Utils/SliderImages";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./MostPopular.module.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const tours = [
  {
    name: "Hunza Adventure",
    price: "$250 per person",
    image: SliderImages.Slide1.src,
    rating: 5,
  },
  {
    name: "Skardu Expedition",
    price: "$280 per person",
    image: SliderImages.Slide2.src,
    rating: 4.5,
  },
  {
    name: "Swat Valley Tour",
    price: "$200 per person",
    image: SliderImages.Slide3.src,
    rating: 4,
  },
  {
    name: "Murree Hills Getaway",
    price: "$150 per person",
    image: SliderImages.Slide1.src,
    rating: 4.2,
  },
];

const MostPopular = () => {
  return (
    <section className={styles.container}>
      <motion.h4
        className={styles.subtitle}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Tours
      </motion.h4>

      <h2 className={styles.heading}>Most Popular Tours</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className={styles.card}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={tour.image} alt={tour.name} className={styles.image} />
              <div className={styles.content}>
                <h3>{tour.name}</h3>
                <p className={styles.price}>{tour.price}</p>
                <div className={styles.stars}>
                  {[...Array(Math.floor(tour.rating))].map((_, i) => (
                    <FaStar key={i} color="#ffc107" />
                  ))}
                  {tour.rating % 1 !== 0 && <FaStar color="#ccc" />}{" "}
                  {/* half star */}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MostPopular;
