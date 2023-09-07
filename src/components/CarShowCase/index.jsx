import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.css";
import CarouselCarImages from "../CarouselCarImages";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import {
  ECarColor,
  EDriveType,
  EEngineType,
  EModel,
  ETransmission,
} from "../../../enums/Enums";
import { STEERING_WHEEL } from "../dependencies/constants";

const CarShowCase = ({ car }) => {
  const { t } = useTranslation();
  const steeringWheel = STEERING_WHEEL.getString(car?.stearing_wheel);
  return (
    <div className={styles.carShowCaseWrapper}>
      <div className={styles.imageWrapper}>
        <CarouselCarImages imageUrls={car?.images} clickable />
      </div>
      <div className={styles.description}>
        <Title level={3}>${car?.price}</Title>
        <div className={styles.textWrapper}>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              {t('engine')}:
            </Text>
            <Text className={styles.text}>
              {EEngineType.toString(car?.engine_type)}, {car?.engine_size}{" "}
              {t("liter_short")}
            </Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              {t('power')}:
            </Text>
            <Text className={styles.text}>{car?.engine_power} hp</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              {t('transmission')}:
            </Text>
            <Text className={styles.text}>
              {t(ETransmission.toString(car?.transmission))}
            </Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              {t('drive_type')}:
            </Text>
            <Text className={styles.text}>
              {t(EDriveType.toString(car?.drive_type))}
            </Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              {t('color')}:
            </Text>
            <Text className={styles.text}>
              {t(ECarColor.toString(car?.color))}
            </Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              {t('mileage')}:
            </Text>
            <Text className={styles.text}>{car?.mileage} км</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              {t('steering_wheel')}:
            </Text>
            <Text className={styles.text}>{t(steeringWheel)}</Text>
          </div>
          <div className={styles.textRow}>
            <Text type="secondary" className={styles.secondaryText}>
              {t('model')}:
            </Text>
            <Text className={styles.text}>{EModel.toString(car?.model)}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarShowCase;
