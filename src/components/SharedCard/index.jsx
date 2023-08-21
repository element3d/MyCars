"use client";
import React from "react";
import ImageCard from "../DynamicImages";
import styles from './styles.module.css';
import { Typography } from 'antd';

const { Title } = Typography;

const SharedCard = () => {
  const imageUrls = [
    "/images/car-1.jpg",
    "/images/car-2.jpg",
    "/images/car-3.jpg",
  ];
  return (
    <div className={styles.sharedCardWrapper}>
      <ImageCard imageUrls={imageUrls} />
      <Title level={3} className={styles.title}>Some Awesome Car</Title>
    </div>
  );
};

export default SharedCard;
