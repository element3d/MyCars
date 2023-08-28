import React, { useCallback, useState } from "react";
import { Collapse, Typography, Input } from "antd";

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

const AddNewCarSecondary = () => {
  const [open, setOpen] = useState();
  const [selectedValue, setSelectedValue] = useState({
    year: "",
    body: "",
    engine: "",
    driveConfiguration: "",
    transmission: "",
    color: "",
  });

  const getSelectedValue = useCallback((element, type, itemKey) => {
    setSelectedValue((prevState) => ({ ...prevState, [type]: element })),
      setOpen((prev) => prev?.filter((key) => key !== itemKey));
  }, []);

  const items = [
    {
      key: "1",
      label: "Year",
      children: (
        <div className={styles.flexContainer}>
          {generateYearArrayFrom(2000).map((el) => (
            <p key={el} onClick={() => getSelectedValue(el, "year", "1")}>
              {el}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectedValue.year}</div>,
    },
    {
      key: "2",
      label: "Body",
      children: (
        <div className={styles.flexContainer}>
          {CarBodyTypes.map((body) => (
            <p key={body} onClick={() => getSelectedValue(body, "body", "2")}>
              {body}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectedValue.body}</div>,
    },
    {
      key: "3",
      label: "Engine",
      children: (
        <div className={styles.flexContainer}>
          {EngineTypes.map((engine) => (
            <p
              key={engine}
              onClick={() => getSelectedValue(engine, "engine", "3")}
            >
              {engine}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectedValue.engine}</div>,
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
                getSelectedValue(driveConfiguration, "driveConfiguration", "4")
              }
            >
              {driveConfiguration}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectedValue.driveConfiguration}</div>,
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
                getSelectedValue(transmission, "transmission", "5")
              }
            >
              {transmission}
            </p>
          ))}
        </div>
      ),
      extra: <div>{selectedValue.transmission}</div>,
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
                onClick={() => getSelectedValue(color, "color", "6")}
              >
                <ColorPicker pickedColor={color} />
              </p>
            );
          })}
        </div>
      ),
      extra: <div>{getColorsKeyByValue(selectedValue.color, COLOR_TYPES)}</div>,
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
        <Input defaultValue="26888888" size="large"/>
      </div>
    </div>
  );
};

export default AddNewCarSecondary;
