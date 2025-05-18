import React, { useState } from "react";
import styles from "./DestinationGallery.module.css";
import SliderImages from "@/app/Utils/SliderImages";
import { motion } from "framer-motion";

const destinations = [
  { name: "Hunza Valley", image: SliderImages.Slide3.src },
  { name: "Skardu", image: SliderImages.Slide1.src },
  { name: "Murree", image: SliderImages.Slide2.src },
  { name: "Fairy Meadows", image: SliderImages.Slide3.src },
  { name: "Neelum Valley", image: SliderImages.Slide2.src },
  { name: "Shogran", image: SliderImages.Slide3.src },
  { name: "Swat", image: SliderImages.Slide1.src },
  { name: "Nathia Gali", image: SliderImages.Slide2.src },
];

const DestinationGallery = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleBookClick = (destination) => {
    setSelectedDestination(destination);
  };

  const handleSubmit = () => {
    alert(`Booking request submitted for ${selectedDestination.name}`);
    setSelectedDestination(null);
    setName("");
    setPhone("");
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Destination Lists</h2>
        <h3>Go Exotic Places</h3>
      </div>

      <div className={styles.gallery}>
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.02 }}
          >
            <img src={dest.image} alt={dest.name} className={styles.image} />
            <div className={styles.overlay}>
              <h4>{dest.name}</h4>
              <button onClick={() => handleBookClick(dest)}>Book Now</button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedDestination && (
        <div className={styles.popupOverlay}>
          <motion.div
            className={styles.popup}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h3>Booking for {selectedDestination.name}</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className={styles.popupButtons}>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={() => setSelectedDestination(null)}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default DestinationGallery;
