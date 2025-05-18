"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMountain,
  FaCar,
  FaRoad,
  FaClock,
  FaMapPin,
  FaUsers,
} from "react-icons/fa";
import SliderImages from "../Utils/SliderImages";
import styles from "./Services.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import AnimatedButton from "../components/Buttons/AnimatedButton";

export default function ServicesPage() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <PageHeader
        image={SliderImages.Slide2.src}
        title={"Our Services"}
        description={
          "Discover our top-notch tourism and car rental services designed to make your travel across Pakistan smooth, safe, and unforgettable."
        }
      />

      <div className={styles.container}>
        {/* Our Services Section */}
        <section className={styles.servicesSection}>
          <div className={styles.card}>
            <FaMountain size={40} />
            <h3>Tourism Packages</h3>
            <p>
              Explore breathtaking destinations across Pakistan including Hunza,
              Swat, Skardu, and more with our expertly guided and
              budget-friendly packages.
            </p>
          </div>
          <div className={styles.card}>
            <FaCar size={40} />
            <h3>Rent a Car</h3>
            <p>
              From economy to luxury cars, enjoy hassle-free and affordable car
              rental options for solo trips, families, or corporate needs.
            </p>

            <AnimatedButton
              className={styles.button}
              onClick={() => setShowBooking(true)}
            >
              Book a Car
            </AnimatedButton>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseUs}>
          <h2>Why Choose Us</h2>
          <div className={styles.reasons}>
            <div>
              <FaUsers /> Trusted & Experienced Team
            </div>
            <div>
              <FaRoad /> Wide Range of Vehicles
            </div>
            <div>
              <FaClock /> 24/7 Customer Support
            </div>
            <div>
              <FaMapPin /> Local Expertise
            </div>
          </div>
        </section>

        {/* Booking Popup Form */}
        {showBooking && (
          <div
            className={styles.modalOverlay}
            onClick={() => setShowBooking(false)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Book a Car</h3>
              <form>
                <input type="text" placeholder="Full Name" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="text" placeholder="Pickup Location" required />
                <input type="text" placeholder="Drop-off Location" required />
                <input type="datetime-local" required />
                <select required>
                  <option value="">Select Car Type</option>
                  <option value="Economy">Economy</option>
                  <option value="Luxury">Luxury</option>
                  <option value="SUV">SUV</option>
                </select>
                <AnimatedButton type="submit">Confirm Booking</AnimatedButton>
              </form>
              <button
                className={styles.closeBtn}
                onClick={() => setShowBooking(false)}
              >
                ×
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}
