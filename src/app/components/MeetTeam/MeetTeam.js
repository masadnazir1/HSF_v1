import React from "react";
import styles from "./MeetTeam.module.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Asad Ali",
    position: "Founder & CEO",
    image: "/images/team/asad.jpg",
    social: {
      facebook: "https://facebook.com/asad",
      twitter: "https://twitter.com/asad",
      instagram: "https://instagram.com/asad",
      linkedin: "https://linkedin.com/in/asad",
    },
  },
  {
    name: "Ayesha Khan",
    position: "Tour Manager",
    image: "/images/team/ayesha.jpg",
    social: {
      facebook: "https://facebook.com/ayesha",
      twitter: "https://twitter.com/ayesha",
      instagram: "https://instagram.com/ayesha",
      linkedin: "https://linkedin.com/in/ayesha",
    },
  },
  {
    name: "Ali Raza",
    position: "Marketing Head",
    image: "/images/team/ali.jpg",
    social: {
      facebook: "https://facebook.com/ali",
      twitter: "https://twitter.com/ali",
      instagram: "https://instagram.com/ali",
      linkedin: "https://linkedin.com/in/ali",
    },
  },
];

const MeetTeam = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.heading}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className={styles.profileImage}
              />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
            <div className={styles.socialIcons}>
              <a
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTeam;
