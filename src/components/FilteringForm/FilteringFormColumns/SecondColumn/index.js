import React from "react";
import { Form, Input, Select, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

import styles from "../../styles.module.css";

const sx = {
  rightMargin: {
    marginRight: "10px",
  },
  noBottomMargin: {
    marginBottom: "0",
  },
};

const SecondsColumn = ({
  formData,
  handleFilteringFormChange,
  handleFormSelectChange,
  engineArray,
  driveTypeArray,
}) => {
  const { t } = useTranslation();

  return (
    <>
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
          <Select
            placeholder={t("drive_type")}
            onChange={(value) => handleFormSelectChange(value, "driveType")}
          >
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
              <Typography.Text type="secondary">{t("km")}</Typography.Text>
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
              <Typography.Text type="secondary">{t("km")}</Typography.Text>
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
              <Typography.Text type="secondary">{t("sec")}</Typography.Text>
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
              <Typography.Text type="secondary">{t("sec")}</Typography.Text>
            }
            name="accelerationTo"
            value={formData.accelerationTo}
            onChange={handleFilteringFormChange}
          />
        </Form.Item>
      </Space.Compact>
    </>
  );
};

export default SecondsColumn;
