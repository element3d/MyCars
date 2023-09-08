import React, { useCallback, useState } from "react";
import { Collapse, Typography, Input } from "antd";
import _debounce from "lodash/debounce";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.css";
import {
  generateYearArrayFrom,
  removeNegativeRepetitiveArr,
} from "../dependencies/utils";

import ColorPicker from "../ColorPicker";
import {
  EBodyType,
  ECarColor,
  EDriveType,
  EEngineType,
  ETransmission,
} from "../../../enums/Enums";
import RenderCollapseItem from "./renderChildrenItem";

const { Title } = Typography;

const AddNewCarSecondary = ({ setSelectInputValue, selectInputValue }) => {
  const [open, setOpen] = useState();
  const { t } = useTranslation();

  const getSelectInputValue = useCallback(
    (element, type, collapseKey) => {
      const colorElement = ECarColor.toString(element);
      setSelectInputValue((prevState) => ({
        ...prevState,
        [type]: type === "color" ? colorElement : element,
      })),
        setOpen((prev) => prev?.filter((key) => key !== collapseKey));
    },
    [setSelectInputValue]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleInputChange = useCallback(
    _debounce((value) => {
      setSelectInputValue((prev) => ({ ...prev, mileage: value }));
    }, 500),
    [setSelectInputValue]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    debouncedHandleInputChange(value);
  };

  const bodiesArray = removeNegativeRepetitiveArr([
    ...Object.values(EBodyType),
  ]);
  const enginesArray = removeNegativeRepetitiveArr([
    ...Object.values(EEngineType),
  ]);
  const driveTypeArray = removeNegativeRepetitiveArr([
    ...Object.values(EDriveType),
  ]);
  const transmissionTypeArray = removeNegativeRepetitiveArr([
    ...Object.values(ETransmission),
  ]);

  const items = [
    {
      key: "1",
      label: "Year",
      children: RenderCollapseItem(
        "year",
        "1",
        generateYearArrayFrom(1990),
        null,
        getSelectInputValue
      ),
      extra: <div>{selectInputValue.year}</div>,
    },
    {
      key: "2",
      label: "Body",
      children: RenderCollapseItem(
        "body_type",
        "2",
        bodiesArray,
        EBodyType,
        getSelectInputValue
      ),
      extra: <div>{EBodyType.toString(selectInputValue.body_type)}</div>,
    },
    {
      key: "3",
      label: "Engine",
      children: RenderCollapseItem(
        "engine_type",
        "3",
        enginesArray,
        EEngineType,
        getSelectInputValue
      ),
      extra: <div>{t(EEngineType.toString(selectInputValue.engine_type))}</div>,
    },
    {
      key: "4",
      label: "Drive Configuration",
      children: RenderCollapseItem(
        "drive_type",
        "4",
        driveTypeArray,
        EDriveType,
        getSelectInputValue
      ),
      extra: (
        <div>{t(EDriveType.toString(selectInputValue.drive_type))}</div>
      ),
    },
    {
      key: "5",
      label: "Transmission",
      children: RenderCollapseItem(
        "transmission",
        "5",
        transmissionTypeArray,
        ETransmission,
        getSelectInputValue
      ),
      extra: (
        <div>{t(ETransmission.toString(selectInputValue.transmission))}</div>
      ),
    },
    {
      key: "6",
      label: "Color",
      children: (
        <div className={styles.flexContainer}>
          {[...Object.values(ECarColor)]
            .filter((el) => el >= 0)
            .map((colorId) => {
              return (
                <p
                  key={colorId}
                  onClick={() => getSelectInputValue(colorId, "color", "6")}
                >
                  <ColorPicker pickedColor={colorId} />
                </p>
              );
            })}
        </div>
      ),
      extra: <div>{selectInputValue.color}</div>,
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
