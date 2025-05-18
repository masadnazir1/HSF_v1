"use client";

import React, { useEffect } from "react";
import styles from "./AboutUs.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SliderImages from "../Utils/SliderImages";
import Image from "next/image";
import MeetTeam from "../components/MeetTeam/MeetTeam";
import Images from "../Utils/Images";
import PageHeader from "../components/PageHeader/PageHeader";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    gsap.utils.toArray(".fade-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <PageHeader
        image={SliderImages.Slide3}
        title={"About Us"}
        description={
          "Discover the heart of “Dream Discover with HSF” — where passion for travel meets a mission to showcase Pakistan’s hidden gems. We craft unforgettable, family-friendly adventures tailored to every explorer."
        }
      />

      <div className={styles.container}>
        <section className={`${styles.section} fade-section`}>
          <div className={styles.imageLeft}>
            <Image
              src={Images.missionImg.src}
              alt="Our Mission"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.textRight}>
            <h2>Our Mission</h2>
            <p>
              Dream Discover with HSF aims to promote tourism in Pakistan by
              introducing beautiful, lesser-known destinations to local and
              international travelers.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reverse} fade-section`}>
          <div className={styles.textLeft}>
            <h2>What Makes Us Unique</h2>
            <p>
              We stand out from other tourism companies by offering
              budget-friendly and customized tour packages tailored to every
              traveler’s needs. We ensure a clean, secure, and family-friendly
              environment, providing separate arrangements for families to
              travel with peace of mind.
            </p>
          </div>
          <div className={styles.imageRight}>
            <Image
              src={Images.uniqueImg.src}
              alt="Unique Experience"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </section>

        <section className={`${styles.section} fade-section`}>
          <div className={styles.imageLeft}>
            <Image
              src={Images.destinationsImg.src}
              alt="Destinations"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.textRight}>
            <h2>Our Destinations</h2>
            <p>
              Kashmir, Swat, Kalam, Malam Jabba, Kumrat, Naran, Kaghan, Skardu,
              Hunza, Neelum Valley, Leepa Valley, Ganga Choti, Banjosa, Toli,
              and many more breathtaking locations.
            </p>
            <p>
              <a
                href="https://www.facebook.com/share/v/14xNY5R8aa1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch our travel story on Facebook
              </a>
            </p>
            <p>
              <strong>Contact Number:</strong> [Your Contact Here]
            </p>
          </div>
        </section>
        <MeetTeam />
      </div>
    </>
  );
};

export default AboutUs;
