import React, { useState } from "react";
import styles from "./TourSearchForm.module.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const TourSearchForm = () => {
  const [showPlaceOptions, setShowPlaceOptions] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [tripType, setTripType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const places = [
    "Murree",
    "Hunza Valley",
    "Skardu",
    "Swat Valley",
    "Neelum Valley (AJK)",
    "Fairy Meadows",
    "Shogran",
    "Nathia Gali",
  ];

  const handleSubmit = () => {
    setShowPopup(false);
    alert("Details submitted.");
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <FaMapMarkerAlt className={styles.icon} />
          <input
            type="text"
            placeholder="Where to .."
            value={selectedPlace}
            onFocus={() => setShowPlaceOptions(true)}
            readOnly
          />
          {showPlaceOptions && (
            <ul className={styles.dropdown}>
              {places.map((place, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setSelectedPlace(place);
                    setShowPlaceOptions(false);
                  }}
                >
                  {place}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.inputGroup}>
          <FaCalendarAlt className={styles.icon} />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="">Trip Type</option>
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Cultural">Cultural</option>
            <option value="Honeymoon">Honeymoon</option>
          </select>
        </div>

        <button
          type="button"
          className={styles.findButton}
          onClick={() => setShowPopup(true)}
        >
          <FaSearch /> Find Now
        </button>
      </form>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <motion.div
            className={styles.popup}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Enter Your Details</h2>
            <input
              type="text"
              placeholder="Name"
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
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default TourSearchForm;
