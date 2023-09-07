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
  handleFormSelectChange = () => {},
  clearStateNameBased = () => {},
  allCarsArray,
  carSeriesArray,
  carGenerationsArray,
  carModelArray,
  formData
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Form.Item className={styles.flexGrow} style={sx.rightMargin}>
        <Select
          placeholder={t("make")}
          onChange={(value) => {
            clearStateNameBased('make')
            handleFormSelectChange(value, "make")
          }}
          value={formData.make}
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
          onChange={(value) => {
            clearStateNameBased('series');
            handleFormSelectChange(value, "series");
          }}
          value={formData.series}
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
          onChange={(value) => {
            clearStateNameBased('generation');
            handleFormSelectChange(value, "generation");
          }}
          value={formData.generation}
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
          onChange={(value) => {
            clearStateNameBased('model');
            handleFormSelectChange(value, "model");
          }}
          value={formData.model}
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
