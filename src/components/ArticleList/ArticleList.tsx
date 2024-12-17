import React, { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./ArticleList.module.scss";

const mockArticles = [
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


const ArticleList: React.FC = () => {
  const [articles] = useState(mockArticles);

  return (
    <div className={styles.gridContainer}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
