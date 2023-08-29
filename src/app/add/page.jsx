"use client";
import React, { useState } from "react";
import { Typography } from "antd";

import styles from "./styles.module.css";
import AddNewCarPrimary from "@/components/AddNewCarPrimary";
import AddNewCarSecondary from "@/components/AddNewCarSecondary";
import AddNewCarPhoto from "@/components/AddNewCarPhoto";
import { Button, Form } from "antd";

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
        <Text type="secondary" className={styles.contentBoxH2}>Add you new post</Text>
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
          {selectInputValue.year && (
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
