import React, { useCallback, useEffect, useRef } from "react";
import { Input, Select, Space, Checkbox, Typography } from "antd";
import { DollarOutlined } from "@ant-design/icons";

import styles from "./styles.module.css";
import DramIcon from "../icon-components/DramIcon";

const options = [
  { label: "Dollar", value: "dollar", icon: <DollarOutlined /> },
  { label: "Dram", value: "dram", icon: <DramIcon /> },
];

const AddNewCarPriceDescription = ({
  setSelectInputValue,
  selectInputValue,
}) => {
  const ref = useRef(null)
  useEffect(() => {
    setSelectInputValue((prev) => ({ ...prev, currency: "dollar" }));
  }, [setSelectInputValue]);

  useEffect(() => {
    if (selectInputValue.city && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectInputValue.city]);

  const handleChange = useCallback((e) => {
    const { name, value, checked } = e.target;

    setSelectInputValue((prev) => ({
      ...prev,
      [name]: name === "isExchangeAvailable" ? checked : value,
    }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.priceDescriptionBox}>
        <Typography.Title placeholder="Input city" level={3}>
          Price
        </Typography.Title>

        <Space.Compact className={styles.priceDescriptionBoxSpace}>
          <Input type="number" name="price" onChange={handleChange} />
          <Select
            style={{ width: "150px" }}
            placeholder="currency"
            value={selectInputValue.currency}
            onChange={(value) => {
              setSelectInputValue((prevState) => ({
                ...prevState,
                currency: value,
              }));
            }}
          >
            {options.map((el) => (
              <Select.Option key={el.value}>
                <div className={styles.optionsDiv}>
                  {el.icon}
                  <p>{el.label}</p>
                </div>
              </Select.Option>
            ))}
          </Select>
        </Space.Compact>
        <Checkbox
          checked={selectInputValue.isExchangeAvailable}
          name="isExchangeAvailable"
          onChange={handleChange}
          className={styles.checkbox}
        >
          Exchange is available
        </Checkbox>
      </div>
      <div className={styles.priceDescriptionBox} ref={ref}>
        <Typography.Title placeholder="Input city" level={3}>
          Your Comments
        </Typography.Title>
        <Input.TextArea
          name="comments"
          placeholder="About the car. Maximum 800 words"
          autoSize={{ minRows: 2, maxRows: 12 }}
          maxLength={800}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AddNewCarPriceDescription;
