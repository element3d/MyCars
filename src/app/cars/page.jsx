"use client";
import React from "react";
import styles from "./styles.module.css";
import FilteringForm from "@/components/FilteringForm";
import SharedCard from "@/components/SharedCard";
import BreadCrumb from "@/components/BreadCrumb";
import { items } from "./data";
import { useQuery } from "@tanstack/react-query";
import { GET_ALL_CARS } from "@/queries/get";
import axiosInstance from "../../../axiosInstance";
import { Skeleton } from "antd";

function HomePage() {
  const { data: { data: allCars } = {}, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: () => axiosInstance.get(GET_ALL_CARS),
  });

  return (
    <>
      <section className={styles.sectionLeft}>
        <BreadCrumb items={items} />
        <div className={styles.filteringFormWrapper}>
          <FilteringForm />
        </div>
        {isLoading && <Skeleton active />}
        {allCars?.cars.map((car) => (
          <SharedCard key={car.id} images={car.images} id={car.id} />
        ))}
      </section>
      <section className={styles.sectionRight}>SECTION RIGHT</section>
    </>
  );
}

export default HomePage;
