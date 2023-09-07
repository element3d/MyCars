import React from "react";

import styles from "../../styles.module.css";
import { DatePicker, Form, Input, Select, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

const sx = {
  rightMargin: {
    marginRight: "10px",
  },
  noBottomMargin: {
    marginBottom: "0",
  },
};

const FirstColumn = ({
  handleFilteringFormChange,
  handleFormSelectChange,
  bodyTypesArray,
  transmissionArray,
}) => {
  const { t } = useTranslation();
  return (
    <>
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
            onChange={(value) => handleFormSelectChange(value, "transmission")}
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
            onChange={(_, value) => handleFormSelectChange(value, "yearFrom")}
          />
        </Form.Item>
        <Form.Item>
          <DatePicker
            picker="year"
            placeholder={t("year_to")}
            onChange={(_, value) => handleFormSelectChange(value, "yearTo")}
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
              <Typography.Text type="secondary">{t("hp")}</Typography.Text>
            }
          />
        </Form.Item>
        <Form.Item style={sx.noBottomMargin}>
          <Input
            placeholder={t("power_to")}
            name="powerTo"
            onChange={handleFilteringFormChange}
            suffix={
              <Typography.Text type="secondary">{t("hp")}</Typography.Text>
            }
          />
        </Form.Item>
      </Space.Compact>
    </>
  );
};

export default FirstColumn;
