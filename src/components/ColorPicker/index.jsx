import React from "react";
import { Tooltip } from "antd";

import styles from "./styles.module.css";
import { ECarColor } from "../../../Enums";

const ColorPicker = ({ pickedColor }) => {
  const color = ECarColor.toColor(pickedColor);
  const colorName = ECarColor.toString(pickedColor)

  const customStyles = {
    backgroundColor: color,
    border: color === "white" ? "1px solid #ccc" : "none",
  };

  return (
    <Tooltip placement="topLeft" title={colorName}>
      <p className={styles.container} style={customStyles} />
    </Tooltip>
  );
};

export default ColorPicker;
