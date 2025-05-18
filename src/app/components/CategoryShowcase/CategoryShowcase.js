import { useState } from "react";
import styles from "./CategoryShowcase.module.css";
import BookingModal from "../Modal/BookingModal";
import AnimatedButton from "../Buttons/AnimatedButton";
import {
  FaMountain,
  FaTree,
  FaBinoculars,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  { name: "Wildlife", icon: <FaBinoculars /> },
  { name: "Meadows", icon: <FaTree /> },
  { name: "Kashmir Beauty", icon: <FaMountain /> },
  { name: "Beach Tours", icon: <FaUmbrellaBeach /> },
];

const CategoryShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.left}>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.subtitle}
            >
              Are you ready to travel?
            </motion.p>
            <h2 className={styles.heading}>
              Tevily is a World Leading Online Tour Booking Platform
            </h2>
            <div style={{ marginTop: "10px" }}>
              <AnimatedButton onClick={() => setIsModalOpen(true)}>
                Book Now
              </AnimatedButton>
            </div>
          </div>

          <div className={styles.right}>
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                className={styles.categoryBox}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className={styles.icon}>{cat.icon}</div>
                <p>{cat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination="Skardu" // Optional
      />
    </section>
  );
};

export default CategoryShowcase;
