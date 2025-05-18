import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Images from "../Utils/Images";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image src={Images.logo.src} alt="HSF" width={50} height={50} />
            Dream Discover with HSF
          </div>
          <ul className={styles.contact}>
            <li>
              <FaPhone /> +92 331 8809581
            </li>
            <li>
              <FaEnvelope /> needhelp@dreamdiscover.pk
            </li>
            <li>
              <FaMapMarkerAlt /> 666 road, brooklyn street new york
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Community Blog</li>
            <li>Rewards</li>
            <li>Work with Us</li>
            <li>Meet the Team</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Explore</h4>
          <ul>
            <li>Account</li>
            <li>Legal</li>
            <li>Contact</li>
            <li>Affiliate Program</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Newsletter</h4>
          <input
            type="email"
            placeholder="Email Address"
            className={styles.input}
          />
          <button className={styles.subscribe}>SUBSCRIBE</button>
          <div className={styles.agreement}>
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I agree to all terms and policies</label>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.socials}>
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaInstagram />
        </div>
        <div className={styles.copyright}>
          © All Copyright 2025, Dream Discover with HSF
        </div>
      </div>
    </footer>
  );
}
