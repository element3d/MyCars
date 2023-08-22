"use client";
import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

import styles from "./styles.module.css";
import { items } from "../data";
import BreadCrumb from "@/components/BreadCrumb";
import CarShowCase from "@/components/CarShowCase";
import { text1, text2 } from "./data";

const CarPage = () => {
  return (
    <>
      <section className={styles.sectionLeft}>
        <BreadCrumb items={items} />
        <Title>Car for sale BMW X5, 2016</Title>
        <CarShowCase />
        <div className={styles.carComments}>
          <Title level={2}>Seller Comments</Title>
          <Text className={styles.carCommentsText}>{text2}</Text>
          <Text className={styles.carCommentsText}>{text1}</Text>
        </div>
      </section>
      <section className={styles.sectionRight}>SECTION RIGHT</section>
    </>
  );
};

export default CarPage;
