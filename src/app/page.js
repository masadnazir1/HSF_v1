"use client";
import TourSearchForm from "./components/TourSearchForm/TourSearchForm";
import Carousel from "./components/Sliders/Carousel";
import DestinationGallery from "./components/DestinationGallery/DestinationGallery";

import Styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <div className={Styles.CarouselANDFORM}>
        <Carousel />
        <h2
          style={{
            textAlign: "center",
            margin: " 20px 10px",
            color: "#0f7c90",
            fontSize: "2rem",
          }}
        >
          Where Would You Like To Go?
        </h2>
        <TourSearchForm />
        <DestinationGallery />
      </div>
    </>
  );
}
