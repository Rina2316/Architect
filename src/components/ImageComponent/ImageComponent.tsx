"use client";

import { usePathname } from "next/navigation";
import Image from "next/image"; // импортируем Image из Next.js
import MainPageImage from "../../icons/MainPageImage.png";
import Architecture from "../../icons/architecture.png";
import SecondPageImage from "../../icons/SecondPageImage.png";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./ImageComponent.module.scss";

interface ImageComponentProps {
  onScrollToArticles?: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ onScrollToArticles }) => {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      {pathname === "/" ? (
        <section>
          <Image src={Architecture} alt="Architecture Image" className={styles.architecture} width={1800} height={170} />
          <Image src={MainPageImage} alt="Main Page Image" className={styles.image} width={1058} height={824} />
          <div className={styles.block}>
            <p className={styles.paragraphFirstPage}>
              We, as a brand, turn your dreams into fantastique interiors and architectural designs. Our projects inspire the pursuit of your great aspirations. We create the alchemy of luxury and the enjoyment of our clientèle.
            </p>
            <CustomButton size="s" variant="secondary" onClick={onScrollToArticles}>
              All projects
            </CustomButton>
          </div>
          <div className={styles.lastBlock} />
        </section>
      ) : (
        <section>
          <div className={styles.blockTag}>
            <h1 className={styles.tagSecondPage}>
              The Importance of Sustainable Design in Architectural Projects
            </h1>
          </div>
          <div className={styles.blockParagraph}>
            <p className={styles.paragraphSecondPage}>
              In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.
            </p>
          </div>
          <Image src={SecondPageImage} alt="Second Page Image" className={styles.imageSecond} width={1920} height={738} />
        </section>
      )}
    </div>
  );
};

export default ImageComponent;
