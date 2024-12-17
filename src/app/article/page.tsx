"use client";

import React from "react";
import Image from "next/image";
import style from "./styles/article.module.scss";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import Filter from "../../components/Filter/Filter";
import photo from "../../icons/FirstImage.png";

type Article = {
  id: number;
  title: string;
  description: string;
};

const selectedArticle: Article = {
  id: 1,
  title: "Top Trends in Architectural Design for 2024",
  description: "Explore the latest trends shaping architectural design this year, from sustainable materials to futuristic facades. Leading architects around the world are pushing boundaries to blend innovation, functionality, and aesthetics in modern building designs.",
  };

const ArticlePage: React.FC = () => {
  return (
    <div>
      <ImageComponent />
      <Filter />
      <div className={style.mainWrapper}>
        <Image
          src={photo}
          alt={selectedArticle.title}
          width={1037}
          height={687}
          className={style.articleImage}
        />
        <section className={style.text}>
          <h1>{selectedArticle.title}</h1>
          <p>{selectedArticle.description}</p>
        </section>
      </div>
    </div>
  );
};

export default ArticlePage;
