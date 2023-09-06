"use client";
import React from "react";
import ImageCard from "../DynamicImages";
import styles from "./styles.module.css";
import { Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;

const SharedCard = ({ images, id }) => {
  return (
    <Link
      target="_blank"
      href={`/cars/${id}`}
      className={styles.sharedCardWrapper}
    >
      <ImageCard imageUrls={images} />
      <Title level={3} className={styles.title}>
        Car name placeholder
      </Title>
    </Link>
  );
};

export default SharedCard;
