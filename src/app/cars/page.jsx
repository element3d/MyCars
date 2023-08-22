"use client";
import React from "react";
import styles from "./styles.module.css";
import FilteringForm from "@/components/FilteringForm";
import SharedCard from '@/components/SharedCard'
import BreadCrumb from "@/components/BreadCrumb";
import { image, items } from "./data";

 function HomePage() {
  return (
    <>
      <section className={styles.sectionLeft}>
        <BreadCrumb items={items}/>
        <div className={styles.filteringFormWrapper}>
          <FilteringForm />
        </div>
        <SharedCard image={image} />
      </section>
      <section className={styles.sectionRight}>SECTION RIGHT</section>
    </>
  );
}

export default HomePage;
