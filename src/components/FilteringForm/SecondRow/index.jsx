import React from "react";
import { Form, Select } from "antd";
import { useTranslation } from "react-i18next";

import styles from "../styles.module.css";

const sx = {
  rightMargin: {
    marginRight: "10px",
  },
  noBottomMargin: {
    marginBottom: "0",
  },
};

const SecondRow = ({
  handleFormSelectChange,
  allCarsArray,
  carSeriesArray,
  carGenerationsArray,
  carModelArray,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item className={styles.flexGrow} style={sx.rightMargin}>
        <Select
          placeholder={t("make")}
          onChange={(value) => handleFormSelectChange(value, "make")}
        >
          {allCarsArray.map((car) => (
            <Select.Option key={car.value} value={car.value}>
              {car.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item className={styles.flexGrow} style={sx.rightMargin}>
        <Select
          placeholder={t("series")}
          onChange={(value) => handleFormSelectChange(value, "series")}
        >
          {carSeriesArray.map((car) => (
            <Select.Option key={car.value} value={car.value}>
              {car.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item className={styles.flexGrow} style={sx.rightMargin}>
        <Select
          placeholder={t("model")}
          onChange={(value) => handleFormSelectChange(value, "generation")}
        >
          {carGenerationsArray.map((generation) => (
            <Select.Option key={generation.value} value={generation.value}>
              {generation.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item className={styles.flexGrow}>
        <Select
          placeholder={t("submodel")}
          onChange={(value) => handleFormSelectChange(value, "model")}
        >
          {carModelArray.map((car) => (
            <Select.Option key={car.value} value={car.value}>
              {car.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default SecondRow;
