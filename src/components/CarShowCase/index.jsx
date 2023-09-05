import React from "react";

import styles from "./styles.module.css";
import CarouselCarImages from "../CarouselCarImages";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { EDriveType } from "../../../enums/Enums";

const CarShowCase = ({ car }) => {
  return (
    <div className={styles.carShowCaseWrapper}>
      <div className={styles.imageWrapper}>
        <CarouselCarImages imageUrls={car?.images} clickable />
      </div>
      <div className={styles.description}>
        <Title level={3}>${car?.price}</Title>
        <div className={styles.textWrapper}>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Engine:
            </Text>
            <Text className={styles.text}>
              {car?.engine_type}, {car?.engine_size}l
            </Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Power:
            </Text>
            <Text className={styles.text}>{car?.engine_power} hp</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Transmission:
            </Text>
            <Text className={styles.text}>{car?.transmission}</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Drive Config:
            </Text>
            <Text className={styles.text}>{ EDriveType.toString(car?.drive_type)}</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Color:
            </Text>
            <Text className={styles.text}>{car?.color}</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Milage:
            </Text>
            <Text className={styles.text}>{car?.mileage} км</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Steering Wheel:
            </Text>
            <Text className={styles.text}>{car?.stearing_wheel}</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              Generation:
            </Text>
            <Text className={styles.text}>{car?.model}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarShowCase;
