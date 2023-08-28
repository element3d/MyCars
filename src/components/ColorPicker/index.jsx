import React from "react";
import { Tooltip } from "antd";

import styles from "./styles.module.css";
import { getColorsKeyByValue } from "../dependencies/utils";
import { COLOR_TYPES } from "../dependencies/constants";

const ColorPicker = ({ pickedColor }) => {
  const customStyles = {
    backgroundColor: pickedColor,
    border: pickedColor === "#FFFFFF" ? "1px solid #ccc" : "none",
  };

  const colorName = getColorsKeyByValue(pickedColor, COLOR_TYPES);

  return (
    <Tooltip placement="topLeft" title={colorName}>
      <p className={styles.container} style={customStyles} />
    </Tooltip>
  );
};

export default ColorPicker;
