import React from "react";
import styles from "./BlogPage.module.css";
import SliderImages from "../Utils/SliderImages";
import PageHeader from "../components/PageHeader/PageHeader";
import Images from "../Utils/Images";

const blogs = [
  {
    id: 1,
    title: "Discover the Hidden Beauty of Hunza Valley",
    image: Images.Hunza.src,
    snippet:
      "Tucked away in the Gilgit-Baltistan region, Hunza offers breathtaking mountain views, ancient forts, and serene villages.",
  },
  {
    id: 2,
    title: "Why Skardu is a Must-Visit Destination in Pakistan",
    image: Images.Skardu.src,
    snippet:
      "Skardu is your gateway to adventure, home to sparkling lakes, rugged mountains, and the starting point of many treks.",
  },
  {
    id: 3,
    title: "Explore the Lush Green Landscapes of Swat Valley",
    image: Images.sawat.src,
    snippet:
      "Known as the Switzerland of the East, Swat Valley offers scenic valleys, snow-capped peaks, and welcoming locals.",
  },
  {
    id: 4,
    title: "Experience Peace and Serenity in Neelum Valley, Kashmir",
    image: Images.kashmir.src,
    snippet:
      "Neelum Valley in Azad Kashmir is famous for its crystal-clear rivers, pine forests, and cozy hillside cottages.",
  },
  {
    id: 5,
    title: "Visit Fairy Meadows: The Ultimate Nature Escape",
    image: Images.Medows.src,
    snippet:
      "Fairy Meadows, near Nanga Parbat, offers unmatched tranquility and stunning views for those seeking nature at its best.",
  },
];

const BlogPage = () => {
  return (
    <>
      <PageHeader
        image={SliderImages.Slide2.src}
        title={"Explore Pakistan — Our Blog"}
        description={
          "Find tips, stories, and hidden gems from the most beautiful places across Pakistan."
        }
      />

      <div className={styles.blogContainer}>
        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.blogCard}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.blogImage}
              />
              <div className={styles.blogContent}>
                <h2>{blog.title}</h2>
                <p>{blog.snippet}</p>
                <button className={styles.readMore}> Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
