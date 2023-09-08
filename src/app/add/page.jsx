"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography, Button, Form, Spin } from "antd";

import AddNewCarPrimary from "@/components/AddNewCarPrimary";
import AddNewCarSecondary from "@/components/AddNewCarSecondary";
import AddNewCarPhoto from "@/components/AddNewCarPhoto";
import AddNewCarLocation from "@/components/AddNewCarLocation";
import AddNewCarPriceDescription from "@/components/AddNewCarPriceDescription";
import { usePostCarMutation } from "@/mutations/autoMutations";
import styles from "./styles.module.css";

const { Text } = Typography;

const AddNewPostPage = () => {
  const submitButtonRef = useRef(null);
  const [selectInputValue, setSelectInputValue] = useState({
    make: "",
    class: "",
    model: "",
    submodel: "",
    year: null,
    body_type: null,
    engine_type: null,
    drive_type: null,
    transmission: null,
    color: null,
    currency: null,
    country: null,
    description: "",
    customs_cleared: null,
  });

  const [fileList, setFileList] = useState([]);
  console.log("fileList", fileList);

  const { mutate: postCar, isError, error, isLoading } = usePostCarMutation();

  const onFinish = useCallback(() => {
    postCar(selectInputValue);
  }, [postCar, selectInputValue]);

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

          {selectInputValue.submodel && (
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

          {selectInputValue.city !== undefined && (
            <AddNewCarPriceDescription
              setSelectInputValue={setSelectInputValue}
              selectInputValue={selectInputValue}
            />
          )}

          {isError && <Typography.Text>{error.message}</Typography.Text>}

          {selectInputValue.price && (
            <div ref={submitButtonRef}>
              <Form.Item wrapperCol={{ offset: 9 }}>
                {isLoading ? (
                  <Spin />
                ) : (
                  <Button type="primary" htmlType="submit">
                    Add New Post
                  </Button>
                )}
              </Form.Item>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default AddNewPostPage;
