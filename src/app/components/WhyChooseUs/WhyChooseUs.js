import React from "react";
import styles from "./WhyChooseUs.module.css";
import Images from "@/app/Utils/Images";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyChooseUs = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={Images.whychoose.src}
          alt="Travel and Tourism"
          className={styles.image}
        />
      </motion.div>

      <motion.div
        className={styles.right}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className={styles.heading} variants={fadeInUp}>
          Why Choose Tevily
        </motion.h2>

        <motion.p className={styles.description} variants={fadeInUp}>
          At Tevily, we are committed to making your travel experience seamless
          and unforgettable. Our team works tirelessly to curate trips that
          match your preferences while ensuring comfort and safety every step of
          the way.
        </motion.p>

        <motion.ul className={styles.benefits} variants={containerVariants}>
          <motion.li className={styles.benefitItem} variants={fadeInUp}>
            <FaCheckCircle className={styles.icon} />
            <div>
              <strong>Professional and Certified Guides</strong>
              <p>
                Our expert guides are certified professionals passionate about
                sharing the hidden beauty of every destination, providing
                insightful tours with local expertise.
              </p>
            </div>
          </motion.li>

          <motion.li className={styles.benefitItem} variants={fadeInUp}>
            <FaCheckCircle className={styles.icon} />
            <div>
              <strong>Instant and Hassle-Free Bookings</strong>
              <p>
                Book your dream tour instantly with our streamlined system,
                designed for quick confirmations and stress-free travel
                planning.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
