"use client";

import { useState } from "react";
import { gsap } from "gsap";
import styles from "../Styles/Header.module.css";
import Image from "next/image";
import Images from "../Utils/Images";
import Link from "next/link";
import { useEffect, useRef } from "react";
import IconsExport from "../Utils/IconsExport";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 786) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      {/* Sidebar Menu */}
      <div ref={sidebarRef} className={styles.sidebarWrapper}>
        <nav className={styles.sidebar}>
          <button
            className={styles.ToggleClose}
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src={Images.closeicon}
              alt="X"
              className={styles.X}
              width={30}
              height={30}
            />
          </button>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src={IconsExport.menu} alt="menu" width={24} height={24} />
        </button>
        <div className={styles.logo}>
          <Image src={Images.logo} alt="Logo" width={50} height={50} />
          <span>Dream Discover with HSF</span>
        </div>
        <button className={styles.contactMobile}>
          <Image
            src={IconsExport.Phone}
            alt="Call"
            width={24}
            height={24}
            className={styles.PhoneICONS}
          />
        </button>
      </div>

      {/* Desktop Header */}
      <div className={styles.desktopHeader}>
        <div className={styles.logo}>
          <Image src={Images.logo} alt="Logo" width={50} height={40} />
          <span>Dream Discover with HSF</span>
        </div>
        <div className={styles.WraperUI}>
          <ul className={styles.navMenu}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <button className={styles.contactButton}>Contact Us</button>
      </div>
    </header>
  );
}
