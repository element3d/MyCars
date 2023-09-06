"use client";
import React, { useCallback, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Input, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Logo from "../../../public/images/icons-car-48.png";
import RussianFlag from "../icon-components/RussianFlag";
import EnglandFlag from "../icon-components/EnglandFlag";
import i18n from "@/i18n";
import ArmenianFlag from "../icon-components/ArmenianFlag";

const TopBar = () => {
  const handleLanguageChange = useCallback((lng) => {
    i18n.changeLanguage(lng);

    // UPDATE HTML'S LANGUAGE ATTRIBUTE
    document.documentElement.lang = lng;
  }, []);

  const [loading] = useState(false);
  const { Search } = Input;
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link href="/cars" className={styles.linkWrapper}>
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
        <Select
          placeholder="Model"
          defaultValue="en"
          className={styles.language}
          onChange={handleLanguageChange}
        >
          <Select.Option value="am">
            <ArmenianFlag />
          </Select.Option>
          <Select.Option value="ru">
            <RussianFlag />
          </Select.Option>
          <Select.Option value="en">
            <EnglandFlag />
          </Select.Option>
        </Select>
        <Link href="/add" className={styles.newAd}>
          <PlusCircleOutlined className={styles.plusIcon} />
          Sell
        </Link>
        <div className={styles.authButton}>
          <Link href="/auth">Login / Registration</Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
