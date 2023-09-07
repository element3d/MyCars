"use client";
import React, { useState } from "react";
import { Radio } from "antd";
import Link from "next/link";
import BreadCrumb from "@/components/BreadCrumb";
import { AUTH_METHOD } from "@/components/dependencies/constants";
import Register from "@/components/auth/register";
import { items, text1, text2, text3 } from "./data";
import styles from "./styles.module.css";
import Login from "@/components/auth/login";
import { useTranslation } from "react-i18next";

const UserAuthPage = () => {
  const [authMethod, setAuthMethod] = useState(AUTH_METHOD.LOGIN);
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <BreadCrumb items={items} />
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.contentBox}>
          <Radio.Group
            size="large"
            value={authMethod}
            onChange={(e) => setAuthMethod(e.target.value)}
            className={styles.radio}
          >
            <Radio.Button
              className={styles.radioItem}
              value={AUTH_METHOD.LOGIN}
            >
              {t("login")}
            </Radio.Button>
            <Radio.Button
              className={styles.radioItem}
              value={AUTH_METHOD.REGISTRATION}
            >
              {t('register')}
            </Radio.Button>
          </Radio.Group>
          {authMethod === AUTH_METHOD.REGISTRATION ? <Register /> : <Login />}
        </div>
        <p className={styles.paragraph}>
          {text1}{" "}
          <Link href="#" className={styles.paragraphLink}>
            {text2}
          </Link>{" "}
          {text3}
        </p>
      </div>
    </div>
  );
};

export default UserAuthPage;
