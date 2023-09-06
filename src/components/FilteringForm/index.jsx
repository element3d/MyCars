import React from "react";

import {
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Typography,
} from "antd";
import { Collapse } from "antd";
import useFilteringForm from "@/hooks/useFilteringForm/useFilteringForm";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import {
  CLEANED_CUSTOMS,
  ENGINE_POWER,
  STEERING_WHEEL,
} from "../dependencies/constants";

const sx = {
  rightMargin: {
    marginRight: "10px",
  },
  noBottomMargin: {
    marginBottom: "0",
  },
};

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
    handleFilteringFormChange,
    handleFormSelectChange,
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
        </div>
        <div className={styles.flexColumnsWrapper}>
          <div className={styles.firstColumn}>
            <Form.Item style={sx.noBottomMargin}>
              <Form.Item className={styles.inlineItems} style={sx.rightMargin}>
                <Select
                  placeholder={t("body_type")}
                  onChange={(value) => handleFormSelectChange(value, "body")}
                >
                  {bodyTypesArray.map((body) => (
                    <Select.Option key={body.value} value={body.value}>
                      {t(body.label)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item className={styles.inlineItems}>
                <Select
                  placeholder={t("Transmission")}
                  onChange={(value) =>
                    handleFormSelectChange(value, "transmission")
                  }
                >
                  <Select.Option value=""></Select.Option>
                  {transmissionArray.map((transmission) => (
                    <Select.Option
                      key={transmission.value}
                      value={transmission.value}
                    >
                      {t(transmission.label)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Form.Item>

            <Space.Compact>
              <Form.Item>
                <DatePicker
                  picker="year"
                  placeholder={t("year_from")}
                  onChange={(_, value) =>
                    handleFormSelectChange(value, "yearFrom")
                  }
                />
              </Form.Item>
              <Form.Item>
                <DatePicker
                  picker="year"
                  placeholder={t("year_to")}
                  onChange={(_, value) =>
                    handleFormSelectChange(value, "yearTo")
                  }
                />
              </Form.Item>
            </Space.Compact>
            <Space.Compact>
              <Form.Item style={sx.noBottomMargin}>
                <Input
                  placeholder={t("power_from")}
                  name="powerFrom"
                  onChange={handleFilteringFormChange}
                  suffix={
                    <Typography.Text type="secondary">
                      {t("hp")}
                    </Typography.Text>
                  }
                />
              </Form.Item>
              <Form.Item style={sx.noBottomMargin}>
                <Input
                  placeholder={t("power_to")}
                  name="powerTo"
                  onChange={handleFilteringFormChange}
                  suffix={
                    <Typography.Text type="secondary">
                      {t("hp")}
                    </Typography.Text>
                  }
                />
              </Form.Item>
            </Space.Compact>
          </div>

          <div className={styles.secondColumn}>
            <Form.Item style={sx.noBottomMargin}>
              <Form.Item className={styles.inlineItems} style={sx.rightMargin}>
                <Select
                  placeholder={t("engine")}
                  onChange={(value) => handleFormSelectChange(value, "engine")}
                >
                  {engineArray.map((engine) => (
                    <Select.Option key={engine.value} value={engine.label}>
                      {t(engine.label)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item className={styles.inlineItems}>
                <Select placeholder={t("drive_type")}>
                  {driveTypeArray.map((driveConfiguration) => (
                    <Select.Option
                      key={driveConfiguration.value}
                      value={driveConfiguration.value}
                    >
                      {t(driveConfiguration.label)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Form.Item>
            <Space.Compact>
              <Form.Item className={styles.flexGrow}>
                <Input
                  placeholder={t("mileage_from")}
                  suffix={
                    <Typography.Text type="secondary">
                      {t("km")}
                    </Typography.Text>
                  }
                  value={formData.milageFrom}
                  name="milageFrom"
                  onChange={handleFilteringFormChange}
                />
              </Form.Item>
              <Form.Item className={styles.flexGrow}>
                <Input
                  placeholder={t("mileage_to")}
                  suffix={
                    <Typography.Text type="secondary">
                      {t("km")}
                    </Typography.Text>
                  }
                  name="milageTo"
                  value={formData.milageTo}
                  onChange={handleFilteringFormChange}
                />
              </Form.Item>
            </Space.Compact>
            <Space.Compact>
              <Form.Item className={styles.flexGrow} style={sx.noBottomMargin}>
                <Input
                  placeholder={t("acceleration_from")}
                  suffix={
                    <Typography.Text type="secondary">
                      {t("sec")}
                    </Typography.Text>
                  }
                  name="accelerationFrom"
                  value={formData.accelerationFrom}
                  onChange={handleFilteringFormChange}
                />
              </Form.Item>
              <Form.Item className={styles.flexGrow} style={sx.noBottomMargin}>
                <Input
                  placeholder={t("acceleration_to")}
                  suffix={
                    <Typography.Text type="secondary">
                      {t("sec")}
                    </Typography.Text>
                  }
                  name="accelerationTo"
                  value={formData.accelerationTo}
                  onChange={handleFilteringFormChange}
                />
              </Form.Item>
            </Space.Compact>
          </div>

          <div className={styles.thirdColumn}>
            <Space.Compact>
              <Form.Item className={styles.flexGrow}>
                <Select
                  placeholder={t("engine_size_from")}
                  onChange={(value) =>
                    handleFormSelectChange(value, "engineSizeFrom")
                  }
                >
                  <Select.Option value=""></Select.Option>
                  {ENGINE_POWER.map((eng) => (
                    <Select.Option
                      key={eng}
                      value={formData.powerFrom}
                    >{`${eng}${t("liter_short")}`}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item className={styles.flexGrow}>
                <Select
                  placeholder={t("engine_size_to")}
                  onChange={(value) =>
                    handleFormSelectChange(value, "engineSizeTo")
                  }
                >
                  {ENGINE_POWER.map((eng) => (
                    <Select.Option
                      key={eng}
                      value={formData.powerFrom}
                    >{`${eng}${t("liter_short")}`}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Space.Compact>
            <Space.Compact>
              <Form.Item>
                <Input
                  placeholder={t("price_from")}
                  className={styles.flexGrow}
                  name="priceFrom"
                  value={formData.priceFrom}
                  onChange={handleFilteringFormChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder={t("price_to")}
                  className={styles.flexGrow}
                  name="priceTo"
                  value={formData.priceTo}
                  onChange={handleFilteringFormChange}
                />
              </Form.Item>
            </Space.Compact>
            <Form.Item style={sx.noBottomMargin}>
              <Form.Item
                className={styles.inlineItems}
                style={{ ...sx.rightMargin, ...sx.noBottomMargin }}
              >
                <Select
                  placeholder="Steering wheel"
                  onChange={(value) =>
                    handleFormSelectChange(value, "steeringWheel")
                  }
                >
                  <Select.Option value={STEERING_WHEEL.LEFT_WHEEL}>
                    {t("left")}
                  </Select.Option>
                  <Select.Option value={STEERING_WHEEL.RIGHT_WHEEL}>
                    {t("right")}
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                className={styles.inlineItems}
                style={sx.noBottomMargin}
              >
                <Select
                  placeholder={t("cleared_customs")}
                  onChange={(value) =>
                    handleFormSelectChange(value, "clearedCustoms")
                  }
                >
                  <Select.Option value={CLEANED_CUSTOMS.YES}>
                    {t("yes")}
                  </Select.Option>
                  <Select.Option value={CLEANED_CUSTOMS.NO}>
                    {t("no")}
                  </Select.Option>
                </Select>
              </Form.Item>
            </Form.Item>
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
