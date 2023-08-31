"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography, Button, Form } from "antd";

import AddNewCarPrimary from "@/components/AddNewCarPrimary";
import AddNewCarSecondary from "@/components/AddNewCarSecondary";
import AddNewCarPhoto from "@/components/AddNewCarPhoto";
import AddNewCarLocation from "@/components/AddNewCarLocation";
import AddNewCarPriceDescription from "@/components/AddNewCarPriceDescription";
import styles from "./styles.module.css";

const { Text } = Typography;

const AddNewPostPage = () => {
  const submitButtonRef = useRef(null);
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

  const onFinish = useCallback((values) => {
    console.log("values", values);
    // TODO: upload photos to api
  }, []);

  const getUploadData = useCallback((data, options) => {
    setFileList(data);
    console.log("options", options);
  }, []);

  useEffect(() => {
    if (selectInputValue.price && submitButtonRef.current) {
      submitButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectInputValue.price]);

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
            <AddNewCarPhoto
              handleGetUploadImages={getUploadData}
              selectInputValue={selectInputValue}
            />
          )}

          {selectInputValue.mileage && (
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
            <div ref={submitButtonRef}>
              <Form.Item wrapperCol={{ offset: 9 }}>
                <Button type="primary" htmlType="submit">
                  Add New Post
                </Button>
              </Form.Item>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default AddNewPostPage;
