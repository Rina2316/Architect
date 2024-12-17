import React from "react";
import styles from "./ArticleCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import photo from "../../icons/FirstImage.png"

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    description: string;
  };
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, description } = article;

  return (
    <Link href={`/article/${title}`} passHref>
      <div className={styles.card}>
        
          <Image
            src={photo} 
            alt={title || "Article image"}
            width={580}
            height={360}
            className={styles.image}
            onError={(e) => console.error("Image load error:", e)}
          />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{truncateText(description, 250)}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
