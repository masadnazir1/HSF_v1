import React from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedButton.module.css";

const AnimatedButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <motion.button
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 15px rgba(0, 184, 148, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      whileFocus={{
        outline: "none",
        boxShadow: "0 0 0 3px rgba(0, 184, 148, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
