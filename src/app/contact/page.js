// File: app/contact/page.jsx
"use client";

import styles from "./Contact.module.css";
import SliderImages from "../Utils/SliderImages";
import PageHeader from "../components/PageHeader/PageHeader";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <PageHeader
        image={SliderImages.Slide1.src}
        title={"Contact US"}
        description={
          "Have questions or need help planning your dream getaway? Our team is here to guide you every step of the way — reach out and let's explore the world together!"
        }
      />

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.topSection}>
            <div className={styles.leftSide}>
              <p className={styles.subtitle}>Talk with our team</p>
              <h2 className={styles.title}>
                Any Question? Feel Free to Contact
              </h2>
              <div className={styles.socialIcons}>
                <span className={styles.socialIcon}>
                  <FaFacebookF />
                </span>
                <span className={styles.socialIcon}>
                  <FaTwitter />
                </span>
                <span className={styles.socialIcon}>
                  <FaInstagram />
                </span>
                <span className={styles.socialIcon}>
                  <FaDribbble />
                </span>
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  className={styles.inputField}
                  placeholder="Email address"
                  required
                />
              </div>
              <textarea
                className={styles.textarea}
                placeholder="Write Comment"
                required
              />
              <button type="submit" className={styles.submitButton}>
                Send a Message
              </button>
            </form>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <FaMapMarkerAlt className={styles.icon} />
              <p>
                88 Broklyn Street
                <br />
                Road New York. USA
              </p>
            </div>
            <div className={styles.infoBox}>
              <FaPhoneAlt className={styles.icon} />
              <p>
                +92 666 888 0000
                <br />
                666 888 0000
              </p>
            </div>
            <div className={styles.infoBox}>
              <FaRegEnvelope className={styles.icon} />
              <p>
                needhelp@tevily.com
                <br />
                info@tevily.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
