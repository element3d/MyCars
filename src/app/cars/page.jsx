"use client";
import React from "react";
import styles from "./styles.module.css";
import FilteringForm from "@/components/FilteringForm";
import SharedCard from '@/components/SharedCard'
import BreadCrumb from "@/components/BreadCrumb";

const items = [
  {
    title: <a href="/">Home</a>,
  },
  {
    title: <a href="/bmw">BMW</a>,
  },
  {
    title: "Title",
  },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.sectionLeft}>
        <div className={styles.filteringFormWrapper}>
        <BreadCrumb items={items}/>
          <FilteringForm />
        </div>
        <SharedCard />
      </section>
      <section className={styles.sectionRight}>SECTION RIGHT</section>
    </main>
  );
}
