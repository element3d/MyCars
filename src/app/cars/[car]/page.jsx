"use client";
import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { useParams } from "next/navigation";

import styles from "./styles.module.css";
import BreadCrumb from "@/components/BreadCrumb";
import CarShowCase from "@/components/CarShowCase";
import { carsList, items, text1, text2 } from "./data";
import RecommendedCar from "@/components/RecommendedCar";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../../axiosInstance";
import { GET_CAR_BY_ID } from "@/queries/get";
import { Skeleton } from "antd";
import { EEngine, EMake } from "../../../../enums/Enums";

const CarPage = () => {
  const params = useParams();

  const { isLoading, data: { data: allCars } = {} } = useQuery({
    queryKey: ["cars", "car.id"],
    queryFn: () => axiosInstance.get(`${GET_CAR_BY_ID}=${params.car}`),
  });

  const { cars: carsArr } = allCars || {};
  const [car] = carsArr || [];

  return (
    <>
      <section className={styles.sectionLeft}>
        <BreadCrumb items={items} />
        <Title>
          Car for sale {EMake.toString(car?.make)}{" "}
          {EEngine.toString(car?.submodel)}, {car?.year}
        </Title>
        {isLoading ? <Skeleton /> : <CarShowCase car={car} />}
        <div className={styles.carComments}>
          <Title level={2}>Seller Comments</Title>
          <Text className={styles.carCommentsText}>{text2}</Text>
          <Text className={styles.carCommentsText}>{text1}</Text>
        </div>
        <div className={styles.recommendedCars}>
          <Title level={2} className={styles.recommendedCarsTitle}>
            You may also like
          </Title>
          <div className={styles.recommendedCarContainer}>
            {carsList &&
              carsList.map((car) => <RecommendedCar car={car} key={car.id} />)}
          </div>
        </div>
      </section>
      <section className={styles.sectionRight}>SECTION RIGHT</section>
    </>
  );
};

export default CarPage;
