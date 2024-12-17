"use client"
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "../styles/article.module.scss";
import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import Filter from "../../../components/Filter/Filter";
import photo from "../../../icons/FirstImage.png";

type Article = {
  id: number;
  title: string;
  description: string;
};

const mockArticles: Article[] = [
  {
    id: 1,
    title: "Top Trends in Architectural Design for 2024",
    description: "Explore the latest trends shaping architectural design this year, from sustainable materials to futuristic facades. Leading architects around the world are pushing boundaries to blend innovation, functionality, and aesthetics in modern building designs.",
  },
  {
    id: 2,
    title: "Revamping Commercial Interiors: Modern Concepts",
    description: "Discover how commercial interior spaces are evolving to prioritize employee well-being and productivity. Key design elements include open-plan layouts, biophilic design, and smart furniture to foster creativity and collaboration in workplaces.",
  },
  {
    id: 3,
    title: "Luxury Redefined: Residential Interiors in 2024",
    description: "From minimalist aesthetics to tech-integrated smart homes, residential interior design is seeing a blend of luxury, comfort, and sustainability. Learn how designers are creating personalized spaces that reflect homeowners' lifestyles and values.",
  },
  {
    id: 4,
    title: "Green Architecture: A Focus on Sustainable Designs",
    description: "Sustainability continues to dominate architectural design. This article highlights innovative projects worldwide that incorporate energy-efficient systems, green roofs, and recycled materials to reduce the environmental footprint of buildings.",
  },
  {
    id: 5,
    title: "The Rise of Adaptive Reuse in Architecture",
    description: "Adaptive reuse is transforming abandoned spaces into functional masterpieces. Learn how architects are creatively repurposing old factories, warehouses, and offices into vibrant residential and commercial hubs.",
  },
  {
    id: 6,
    title: "Blurring the Lines: Indoor-Outdoor Living Spaces",
    description: "Modern residential design embraces the seamless transition between indoor and outdoor spaces. Features like floor-to-ceiling glass, extended patios, and green courtyards are redefining contemporary living.",
  },
];

export function generateStaticParams() {
  return mockArticles.map((article) => ({
    title: article.title,
  }));
}

const ArticlePage: React.FC = () => {
  const params = useParams();
  const { title } = params;

  const decodedTitle = title ? decodeURIComponent(Array.isArray(title) ? title[0] : title) : "Untitled";

  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  useEffect(() => {
    const foundArticle = mockArticles.find((article) => article.title === decodedTitle);
    setCurrentArticle(foundArticle || null);
  }, [decodedTitle]);

  if (!currentArticle) {
    return (
      <div>
        <ImageComponent />
        <Filter />
        <div>Article not found</div>
      </div>
    );
  }

  const { description } = currentArticle;

  return (
    <div>
      <ImageComponent />
      <Filter />
      <div className={style.mainWrapper}>
        <Image
          src={photo}
          alt={decodedTitle || "Article image"}
          width={1037}
          height={687}
          className={style.articleImage}
        />
        <section className={style.text}>
          <h1>{decodedTitle}</h1>
          <p>{description}</p>
        </section>
      </div>
    </div>
  );
};

export default ArticlePage;
