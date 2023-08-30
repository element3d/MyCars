"use client";
import React, { useState } from "react";
import { Typography } from "antd";

import AddNewCarPrimary from "@/components/AddNewCarPrimary";
import AddNewCarSecondary from "@/components/AddNewCarSecondary";
import AddNewCarPhoto from "@/components/AddNewCarPhoto";
import { Button, Form } from "antd";
import AddNewCarLocation from "@/components/AddNewCarLocation";
import AddNewCarPriceDescription from "@/components/AddNewCarPriceDescription";
import styles from "./styles.module.css";

const { Text } = Typography;

const AddNewPostPage = () => {
  const [selectInputValue, setSelectInputValue] = useState({
    brand: "",
    series: "",
    generation: "",
    model: "",
    year: "",
    body: "",
    engine: "",
    driveConfiguration: "",
    transmission: "",
    color: "",
    currency: "",
  });

  const [fileList, setFileList] = useState([]);
  console.log("fileList", fileList);

  const onFinish = (values) => {
    console.log("values", values);
    // TODO: upload photos to api
  };

  const getUploadData = (data, options) => {
    setFileList(data);
    console.log("options", options);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <Text type="secondary" className={styles.contentBoxH2}>
          Add your new post
        </Text>
        <Form className={styles.addNewCarContainer} onFinish={onFinish}>
          <AddNewCarPrimary
            setSelectInputValue={setSelectInputValue}
            selectInputValue={selectInputValue}
          />
          {selectInputValue.model && (
            <AddNewCarSecondary
              setSelectInputValue={setSelectInputValue}
              selectInputValue={selectInputValue}
            />
          )}
          {selectInputValue.year && (
            <AddNewCarPhoto handleGetUploadImages={getUploadData} />
          )}

          {selectInputValue.milage && (
            <AddNewCarLocation
              setSelectInputValue={setSelectInputValue}
              selectInputValue={selectInputValue}
            />
          )}

          {selectInputValue.city && (
            <AddNewCarPriceDescription
              setSelectInputValue={setSelectInputValue}
              selectInputValue={selectInputValue}
            />
          )}

          {selectInputValue.price && (
            <Form.Item wrapperCol={{ offset: 9 }}>
              <Button type="primary" htmlType="submit">
                Add New Post
              </Button>
            </Form.Item>
          )}
        </Form>
      </div>
    </div>
  );
};

export default AddNewPostPage;
