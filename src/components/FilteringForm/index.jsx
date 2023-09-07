import React from "react";

import { Form, Radio } from "antd";
import { Collapse } from "antd";
import useFilteringForm from "@/hooks/useFilteringForm/useFilteringForm";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import SecondRow from "./SecondRow";
import FirstColumn from "./FilteringFormColumns/FirstColumn";
import SecondsColumn from "./FilteringFormColumns/SecondColumn";
import ThirdColumn from "./FilteringFormColumns/ThirdColumn";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    // key: '1',
    label: "Expand",
    children: <div>{text}</div>,
  },
];

// const options = [
//   { label: "Dollar", value: "dollar", icon: <DollarOutlined /> },
//   { label: "Dram", value: "dram", icon: <DramIcon /> },
// ];

const FilteringForm = () => {
  const { t } = useTranslation();

  const onCollapseChange = (key) => {
    console.log("collapse key:", key);
  };

  const {
    formData,
    handleFilteringFormChange = () => {},
    handleFormSelectChange = () => {},
    clearStateNameBased = () => {},
    allCarsArray,
    carSeriesArray,
    carGenerationsArray,
    carModelArray,
    bodyTypesArray,
    transmissionArray,
    engineArray,
    driveTypeArray,
  } = useFilteringForm();

  return (
    <>
      <Form className={styles.filteringForm}>
        <div className={styles.formTopRow}>
          <Radio.Group
            onChange={handleFilteringFormChange}
            name="radio"
            defaultValue="all"
          >
            <Radio.Button value="all">{t("all")}</Radio.Button>
            <Radio.Button value="new">{t("new")}</Radio.Button>
            <Radio.Button value="used">{t("used")}</Radio.Button>
          </Radio.Group>
        </div>

        <div className={styles.secondRow}>
          <SecondRow
            handleFormSelectChange={handleFormSelectChange}
            allCarsArray={allCarsArray}
            carSeriesArray={carSeriesArray}
            carGenerationsArray={carGenerationsArray}
            carModelArray={carModelArray}
            clearStateNameBased={clearStateNameBased}
            formData={formData}
          />
        </div>
        <div className={styles.flexColumnsWrapper}>
          <div className={styles.firstColumn}>
            <FirstColumn
              handleFilteringFormChange={handleFilteringFormChange}
              handleFormSelectChange={handleFormSelectChange}
              bodyTypesArray={bodyTypesArray}
              transmissionArray={transmissionArray}
            />
          </div>

          <div className={styles.secondColumn}>
            <SecondsColumn
              formData={formData}
              handleFilteringFormChange={handleFilteringFormChange}
              handleFormSelectChange={handleFormSelectChange}
              engineArray={engineArray}
              driveTypeArray={driveTypeArray}
            />
          </div>

          <div className={styles.thirdColumn}>
            <ThirdColumn
              formData={formData}
              handleFilteringFormChange={handleFilteringFormChange}
              handleFormSelectChange={handleFormSelectChange}
            />
          </div>
        </div>
        <Collapse
          size="large"
          bordered={false}
          ghost
          items={items}
          onChange={onCollapseChange}
          style={{ marginTop: "5px", padding: "0" }}
        />
      </Form>
    </>
  );
};

export default FilteringForm;
