import { Form, Input, Select, Space } from "antd";
import React from "react";

import styles from "../../styles.module.css";
import {
  CLEANED_CUSTOMS,
  ENGINE_POWER,
  STEERING_WHEEL,
} from "@/components/dependencies/constants";
import { useTranslation } from "react-i18next";

const sx = {
  rightMargin: {
    marginRight: "10px",
  },
  noBottomMargin: {
    marginBottom: "0",
  },
};

const ThirdColumn = ({
  formData,
  handleFilteringFormChange,
  handleFormSelectChange,
}) => {
  const { t } = useTranslation();

  return (
    <>
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
              <Select.Option key={eng} value={formData.powerFrom}>{`${eng}${t(
                "liter_short"
              )}`}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item className={styles.flexGrow}>
          <Select
            placeholder={t("engine_size_to")}
            onChange={(value) => handleFormSelectChange(value, "engineSizeTo")}
          >
            {ENGINE_POWER.map((eng) => (
              <Select.Option key={eng} value={formData.powerFrom}>{`${eng}${t(
                "liter_short"
              )}`}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Space.Compact>
      <Space.Compact>
        <Form.Item>
          <Input
            type="number"
            placeholder={t("price_from")}
            className={styles.flexGrow}
            name="priceFrom"
            value={formData.priceFrom}
            onChange={handleFilteringFormChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
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
            onChange={(value) => handleFormSelectChange(value, "steeringWheel")}
          >
            <Select.Option value={STEERING_WHEEL.LEFT_WHEEL}>
              {t("left")}
            </Select.Option>
            <Select.Option value={STEERING_WHEEL.RIGHT_WHEEL}>
              {t("right")}
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className={styles.inlineItems} style={sx.noBottomMargin}>
          <Select
            placeholder={t("cleared_customs")}
            onChange={(value) =>
              handleFormSelectChange(value, "clearedCustoms")
            }
          >
            <Select.Option value={CLEANED_CUSTOMS.YES}>
              {t("yes")}
            </Select.Option>
            <Select.Option value={CLEANED_CUSTOMS.NO}>{t("no")}</Select.Option>
          </Select>
        </Form.Item>
      </Form.Item>
    </>
  );
};

export default ThirdColumn;
