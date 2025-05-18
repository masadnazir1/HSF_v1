import React, { useState } from "react";
import styles from "./TripPlannerIntro.module.css";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Images from "@/app/Utils/Images";

const TripPlannerIntro = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    date: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Trip details submitted");
    setShowModal(false);
    setFormData({ name: "", destination: "", date: "", contact: "" });
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.leftColumn}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Images.TripPlanner.src}
          alt="Travel"
          className={styles.image}
        />
      </motion.div>

      <motion.div
        className={styles.rightColumn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.p
          className={styles.subheading}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Get to know us
        </motion.p>
        <h2 className={styles.heading}>Plan Your Trip with Trevily</h2>
        <p className={styles.description}>
          At Dream Discover with HSF, we champion tourism in Pakistan by
          revealing its hidden treasures to both local and global explorers. We
          craft personalized and budget-conscious tour packages tailored to
          every traveler’s vision. With a commitment to cleanliness, security,
          and family-friendly experiences, we ensure your journey is not just
          safe, but unforgettable. Discover the beauty of Kashmir, Swat, Hunza,
          Skardu, and beyond.
        </p>

        <ul className={styles.features}>
          <li>
            <FaCheckCircle className={styles.icon} /> Budget-friendly customized
            tour packages
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Safe and secure
            family-oriented trips
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Access to hidden and
            breathtaking destinations
          </li>
        </ul>

        <button className={styles.button} onClick={() => setShowModal(true)}>
          Book Now
        </button>

        {showModal && (
          <div className={styles.modalOverlay}>
            <motion.div
              className={styles.modal}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <h3>Enter Your Trip Details</h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="destination"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Info"
                value={formData.contact}
                onChange={handleChange}
              />
              <div className={styles.modalButtons}>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TripPlannerIntro;
