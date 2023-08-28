'use client'
import React, { useState } from "react";
import { Typography } from "antd";

import styles from "./styles.module.css";
import AddNewCarPrimary from "@/components/AddNewCarPrimary";
import AddNewCarSecondary from "@/components/AddNewCarSecondary";

const { Text } = Typography;

const AddNewPostPage = () => {
  const [selectInputValue, setSelectInputValue] = useState({
    brand: "",
    series: "",
    generation: "",
    model: "",

  });
  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <Text type="secondary">Add you new post</Text>
        <div>
        <AddNewCarPrimary setSelectInputValue={setSelectInputValue} selectInputValue={selectInputValue} />
        {selectInputValue.model && <AddNewCarSecondary />}
        </div>
      </div>
    </div>
  );
};

export default AddNewPostPage;
