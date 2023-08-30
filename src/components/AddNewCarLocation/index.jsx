import React, { useCallback } from "react";
import { Select, Typography } from "antd";

import styles from "./styles.module.css";
import { locationCity, locationCountries, locationProvince } from "./data";

const { Title } = Typography;

const AddNewCarLocation = ({ setSelectInputValue, selectInputValue }) => {
  const handleChange = useCallback((value, selectName) => {
    setSelectInputValue((prev) => ({ ...prev, [selectName]: value }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.locationContainer}>
        <Title level={3}>Country</Title>
        <Select
          placeholder="Input country"
          size="large"
          onChange={(value) => handleChange(value, "country")}
          style={{ width: "100%" }}
          options={locationCountries}
          value={selectInputValue["country"]}
        />
      </div>
      {selectInputValue.country && (
        <div className={styles.locationContainer}>
          <Title level={3}>Province</Title>
          <Select
            placeholder="Input province"
            size="large"
            onChange={(value) => handleChange(value, "province")}
            style={{ width: "100%" }}
            options={locationProvince}
          />
        </div>
      )}
      {selectInputValue.province && (
        <div className={styles.locationContainer}>
          <Title level={3}>City</Title>
          <Select
            placeholder="Input city"
            size="large"
            onChange={(value) => handleChange(value, "city")}
            style={{ width: "100%" }}
            options={locationCity}
            value={selectInputValue["city"]}
          />
        </div>
      )}
    </div>
  );
};

export default AddNewCarLocation;
