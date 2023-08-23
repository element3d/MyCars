"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "antd";
import clsx from "clsx";

import styles from "./styles.module.css";

const { Text } = Typography;

const RecommendedCar = ({ car }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { id, imageSrc, carBrand, year, milage, price } = car || {};

  const handleMouseOver = useCallback(() => setIsMouseOver(true), []);

  const handleMouseOut = useCallback(() => setIsMouseOver(false), []);

  return (
    <div
      className={styles.recommendedCarWrapper}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Link href={`/cars/${id}`} className={styles.carContainer}>
        <Image
          width={200}
          height={200}
          src={imageSrc}
          className={styles.image}
          alt="Recommended Car"
        />
        <Text className={clsx(styles.text, isMouseOver && styles.hovered)}>
          {carBrand}
        </Text>
        <Text className={clsx(styles.text, isMouseOver && styles.hovered)}>
          {year} / {milage} km
        </Text>
        <Text strong className={styles.text}>
          ${price}
        </Text>
      </Link>
    </div>
  );
};

export default RecommendedCar;
