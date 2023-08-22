import React from "react";

import styles from "./styles.module.css";
import CarouselCarImages from "../CarouselCarImages";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

const imageUrls = [
  {
    title: "Image 1",
    url: "/images/car-image-1.jpg",
    id: 1,
  },
  {
    title: "Image 2",
    url: "/images/car-image-2.jpg",
    id: 2,
  },
  {
    title: "Image 3",
    url: "/images/car-image-3.jpg",
    id: 3,
  },
];

const CarShowCase = () => {
  return (
    <div className={styles.carShowCaseWrapper}>
      <div className={styles.imageWrapper}>
        <CarouselCarImages imageUrls={imageUrls} clickable />
      </div>
      <div className={styles.description}>
        <Title level={3}>$36,000</Title>
        <div className={styles.textWrapper}>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Engine:
            </Text>
            <Text className={styles.text}>Diesel, 3.0l</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Power:
            </Text>
            <Text className={styles.text}>313 hp</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Transmission:
            </Text>
            <Text className={styles.text}>Auto</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Drive Config:
            </Text>
            <Text className={styles.text}>4WD</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Color:
            </Text>
            <Text className={styles.text}>Black</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Milage:
            </Text>
            <Text className={styles.text}>120,423 км</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Steering Wheel:
            </Text>
            <Text className={styles.text}>Left</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Generation:
            </Text>
            <Text className={styles.text}>3 generation</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarShowCase;
