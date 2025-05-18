import React from "react";
import styles from "./MeetTeam.module.css";
import Image from "next/image";
import Images from "@/app/Utils/Images";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Qazi Mamoon Ur Rehman",
    position: "Founder & CEO",
    image: Images.Mamoon,
    social: {
      facebook: "https://www.facebook.com/qazi.hammad.5851",
      twitter: "https://www.facebook.com/qazi.hammad.5851",
      instagram: "https://www.facebook.com/qazi.hammad.5851",
      linkedin: "https://www.facebook.com/qazi.hammad.5851",
    },
  },
  {
    name: "M Farhan Munawar",
    position: "Tour Manager",
    image: Images.MFM,
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100086318834135",
      twitter: "https://www.facebook.com/profile.php?id=100086318834135",
      instagram: "https://www.facebook.com/profile.php?id=100086318834135",
      linkedin: "https://www.facebook.com/profile.php?id=100086318834135",
    },
  },
  {
    name: "Waseem Shakir ",
    position: "Marketing Head",
    image: "/images/team/ali.jpg",
    social: {
      facebook:
        "https://www.facebook.com/profile.php?id=100008156539230&rdid=UoNPgT10pL7gQCVB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BV15VNf8G%2F",
      twitter:
        "https://www.facebook.com/profile.php?id=100008156539230&rdid=UoNPgT10pL7gQCVB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BV15VNf8G%2F",
      instagram:
        "https://www.facebook.com/profile.php?id=100008156539230&rdid=UoNPgT10pL7gQCVB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BV15VNf8G%2F",
      linkedin:
        "https://www.facebook.com/profile.php?id=100008156539230&rdid=UoNPgT10pL7gQCVB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BV15VNf8G%2F",
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
