// File: app/contact/page.jsx
"use client";

import styles from "./Destinations.module.css";
import SliderImages from "../Utils/SliderImages";
import PageHeader from "../components/PageHeader/PageHeader";
import DestinationGallery from "../components/DestinationGallery/DestinationGallery";

export default function ContactUs() {
  return (
    <>
      <PageHeader
        image={SliderImages.Slide1.src}
        title={"Top Destinations"}
        description={
          "Discover breathtaking destinations around the globe. From tropical beaches to historic cities, explore curated travel spots to inspire your next unforgettable journey."
        }
      />

      <DestinationGallery />
    </>
  );
}
