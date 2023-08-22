"use client";
import React from "react";
import ImageCard from "../DynamicImages";
import styles from "./styles.module.css";
import { Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;

const SharedCard = ({ image }) => {
  return (
    <Link
      target="_blank"
      href={`/cars/${image.id}`}
      className={styles.sharedCardWrapper}
    >
      <ImageCard imageUrls={image.collection} />
      <Title level={3} className={styles.title}>
        Some Awesome Car
      </Title>
    </Link>
  );
};

export default SharedCard;
