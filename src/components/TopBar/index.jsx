"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/icons-car-48.png";
import { Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const TopBar = () => {
  const [loading] = useState(false);
  const { Search } = Input;
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link href="/" className={styles.linkWrapper}>
          <div className={styles.logo}>
            <Image src={Logo} alt="Logo Image" />
          </div>
          <p>myauto</p>
        </Link>
        <div className={styles.search}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            loading={loading}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.newAd}>
          <PlusCircleOutlined className={styles.plusIcon} />
          Sell
        </div>
        <div className={styles.authButton}>Login</div>
      </div>
    </div>
  );
};

export default TopBar;
