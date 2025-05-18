import React, { useState } from "react";
import styles from "../../Styles/BookingModal.module.css";
import { motion } from "framer-motion";

const BookingModal = ({ isOpen, onClose, destination = "" }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState(destination);
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    alert(
      `Booking Submitted for ${place}\nName: ${name}\nPhone: ${phone}\nDate: ${date}`
    );
    setName("");
    setPhone("");
    setPlace(destination);
    setDate("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3>Book Your Trip</h3>
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
        <input
          type="text"
          placeholder="Desired Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className={styles.buttons}>
          <button className={styles.submit} onClick={handleSubmit}>
            Submit
          </button>
          <button className={styles.cancel} onClick={onClose}>
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;
