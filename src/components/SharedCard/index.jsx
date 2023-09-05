"use client";
import React from "react";
import ImageCard from "../DynamicImages";
import styles from "./styles.module.css";
import { Typography } from "antd";
import Link from "next/link";

import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const SharedCard = ({ images, id }) => {
  const { t } = useTranslation();
  return (
    <Link
      target="_blank"
      href={`/cars/${id}`}
      className={styles.sharedCardWrapper}
    >
      <ImageCard imageUrls={images} />
      <Title level={3} className={styles.title}>
        {t('carName')}
      </Title>
    </Link>
  );
};

export default SharedCard;
