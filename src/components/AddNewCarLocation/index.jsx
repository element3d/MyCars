import React, { useCallback, useEffect, useRef } from "react";
import { Select, Typography } from "antd";

import styles from "./styles.module.css";
import { locationCity } from "./data";
import { ECountry, EProvince } from "../../../enums/Enums";
import { removeNegativeRepetitiveArr } from "../dependencies/utils";

const { Title } = Typography;

const AddNewCarLocation = ({ setSelectInputValue, selectInputValue }) => {
  const cityRef = useRef(null);
  const handleChange = useCallback((value, selectName) => {
    setSelectInputValue((prev) => ({ ...prev, [selectName]: value }));
  }, [setSelectInputValue]);

  useEffect(() => {
    if (selectInputValue.mileage && cityRef.current) {
      cityRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectInputValue.mileage]);

  function getCountry() {
    return Object.values(ECountry).map((el) => ({value: el, label: ECountry.toString(el)}));
  }

  function getProvince() {
    const mappedProvinces = Object.values(EProvince);
    return removeNegativeRepetitiveArr(mappedProvinces).map((province) => ({value: province, label: EProvince.toString(province)}));
  }

  return (
    <div className={styles.container}>
      <div className={styles.locationContainer} ref={cityRef}>
        <Title level={3}>Country</Title>
        <Select
          placeholder="Input country"
          size="large"
          onChange={(value) => handleChange(value, "country")}
          style={{ width: "100%" }}
          options={getCountry()}
          value={selectInputValue["country"]}
        />
      </div>

      <div className={styles.locationContainer}>
        <Title level={3}>Province</Title>
        <Select
          placeholder="Input province"
          size="large"
          onChange={(value) => handleChange(value, "province")}
          style={{ width: "100%" }}
          options={getProvince()}
        />
      </div>

      <div className={styles.locationContainer}>
        <Title level={3}>City</Title>
        <Select
          placeholder="Input city"
          size="large"
          // TODO: EXPLICITLY SENDING 0 AS YEREVAN, FIX LATER WHEN SUB PROVINCE GETS TO_STRING METHOD
          onChange={() => handleChange(0, "city")}
          style={{ width: "100%" }}
          options={locationCity}
          value={selectInputValue["city"]}
        />
      </div>
    </div>
  );
};

export default AddNewCarLocation;
