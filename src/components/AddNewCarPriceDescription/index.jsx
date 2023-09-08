import React, { useCallback, useEffect, useRef } from "react";
import { Input, Select, Space, Checkbox, Typography } from "antd";
import { DollarOutlined } from "@ant-design/icons";

import styles from "./styles.module.css";

const options = [
  { label: "Dollar", value: "dollar", icon: <DollarOutlined /> },
  // { label: "Dram", value: "dram", icon: <DramIcon /> },
];

const AddNewCarPriceDescription = ({
  setSelectInputValue,
  selectInputValue,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    setSelectInputValue((prev) => ({ ...prev, currency: "dollar" }));
  }, [setSelectInputValue]);

  useEffect(() => {
    if (selectInputValue.city && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectInputValue.city]);

  const handleChange = useCallback(
    (e) => {
      const { name, value, checked } = e.target;
      const checkedValue = checked ? 1 : 0;
      const customsCheckedValue = checked ? 1 : 0;

      setSelectInputValue((prev) => {
        if (name === "exchange") {
          return { ...prev, exchange: checkedValue };
        } else if (name === "customs_cleared") {
          return { ...prev, customs_cleared: customsCheckedValue };
        } else {
          return { ...prev, [name]: value };
        }
      });
    },
    [setSelectInputValue]
  );

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
        <Space.Compact>
          <Checkbox
            checked={selectInputValue.exchange}
            name="exchange"
            onChange={handleChange}
            className={styles.checkbox}
          >
            Exchange is available
          </Checkbox>
          <Checkbox
            checked={selectInputValue.customs_cleared}
            name="customs_cleared"
            onChange={handleChange}
            className={styles.checkbox}
          >
            Customs is cleared
          </Checkbox>
        </Space.Compact>
      </div>
      <div className={styles.priceDescriptionBox} ref={ref}>
        <Typography.Title placeholder="Input city" level={3}>
          Your Comments
        </Typography.Title>
        <Input.TextArea
          name="description"
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
