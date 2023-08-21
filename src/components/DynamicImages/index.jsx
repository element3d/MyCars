import React, { useCallback, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const ImageCard = ({ imageUrls }) => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);

  const handleMouseMove = useCallback((event) => {
    const cardRect = event.currentTarget.getBoundingClientRect();
    const imageWidth = cardRect.width / imageUrls.length;
    const mouseX = event.clientX - cardRect.left;
    const newIndex = Math.floor(mouseX / imageWidth);

    setHoveredImageIndex(newIndex);
  }, []);

  const handleMouseOut = useCallback(() => setHoveredImageIndex(0), []);

  return (
    <div
      className={styles.imageCard}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <Image
        src={imageUrls[hoveredImageIndex]}
        alt="Car"
        width={250}
        height={250}
      />
    </div>
  );
};

export default ImageCard;
