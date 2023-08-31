import React, { useCallback, useState } from "react";
import { Collapse, Typography, Input } from "antd";
import _debounce from 'lodash/debounce';

import styles from "./styles.module.css";
import {
  generateYearArrayFrom,
  getColorsKeyByValue,
} from "../dependencies/utils";
import {
  COLOR_TYPES,
  CarBodyTypes,
  Colors,
  DriveConfiguration,
  EngineTypes,
  Transmission,
} from "../dependencies/constants";
import ColorPicker from "../ColorPicker";

const { Title } = Typography;

const AddNewCarSecondary = ({ setSelectInputValue, selectInputValue }) => {
  const [open, setOpen] = useState();

  const getSelectInputValue = useCallback((element, type, itemKey) => {
    setSelectInputValue((prevState) => ({ ...prevState, [type]: element })),
      setOpen((prev) => prev?.filter((key) => key !== itemKey));
  }, []);

  const debouncedHandleInputChange = useCallback(
    _debounce((value) => {
      setSelectInputValue((prev) => ({ ...prev, mileage: value }));
    }, 500),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    debouncedHandleInputChange(value);
  };


  const items = [
    {
      key: "1",
      label: "Year",
      children: (
        <div className={styles.flexContainer}>
          {generateYearArrayFrom(2000).map((el) => (
            <p key={el} onClick={() => getSelectInputValue(el, "year", "1")}>
              {el}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectInputValue.year}</div>,
    },
    {
      key: "2",
      label: "Body",
      children: (
        <div className={styles.flexContainer}>
          {CarBodyTypes.map((body) => (
            <p
              key={body}
              onClick={() => getSelectInputValue(body, "body", "2")}
            >
              {body}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectInputValue.body}</div>,
    },
    {
      key: "3",
      label: "Engine",
      children: (
        <div className={styles.flexContainer}>
          {EngineTypes.map((engine) => (
            <p
              key={engine}
              onClick={() => getSelectInputValue(engine, "engine", "3")}
            >
              {engine}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectInputValue.engine}</div>,
    },
    {
      key: "4",
      label: "Drive Configuration",
      children: (
        <div className={styles.flexContainer}>
          {DriveConfiguration.map((driveConfiguration) => (
            <p
              key={driveConfiguration}
              onClick={() =>
                getSelectInputValue(
                  driveConfiguration,
                  "driveConfiguration",
                  "4"
                )
              }
            >
              {driveConfiguration}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectInputValue.driveConfiguration}</div>,
    },
    {
      key: "5",
      label: "Transmission",
      children: (
        <div className={styles.flexContainer}>
          {Transmission.map((transmission) => (
            <p
              key={transmission}
              onClick={() =>
                getSelectInputValue(transmission, "transmission", "5")
              }
            >
              {transmission}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectInputValue.transmission}</div>,
    },
    {
      key: "6",
      label: "Color",
      children: (
        <div className={styles.flexContainer}>
          {Colors.map((color) => {
            return (
              <p
                key={color}
                onClick={() => getSelectInputValue(color, "color", "6")}
              >
                <ColorPicker pickedColor={color} />
              </p>
            );
          })}
        </div>
      ),
      extra: (
        <div>{getColorsKeyByValue(selectInputValue.color, COLOR_TYPES)}</div>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>
        Characteristics
      </Title>
      <Collapse
        expandIconPosition="end"
        items={items}
        activeKey={open}
        onChange={(e) => setOpen(e)}
      />
      <div className={styles.input}>
        <Title level={3} className={styles.title}>
          Milage
        </Title>
        <Input size="large" type="number" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default AddNewCarSecondary;
