import { removeRepetitiveArr } from "@/components/dependencies/utils";
import {
  EBodyType,
  EDriveType,
  EEngineType,
  ETransmission,
} from "../../../enums/Enums";

export const bodyTypesArray = removeRepetitiveArr(Object.values(EBodyType))
  .filter((el) => {
    // REMOVE 'NONE' VARIANT
    return el !== -2;
  })
  .map((element) => ({
    value: element,
    label: EBodyType.toString(element),
  }));

export const transmissionArray = removeRepetitiveArr(
  Object.values(ETransmission),
)
  .filter((el) => el !== -2)
  .map((element) => ({
    value: element,
    label: ETransmission.toString(element),
  }));

export const engineArray = removeRepetitiveArr(Object.values(EEngineType))
  .filter((el) => el !== -2)
  .map((element) => ({ value: element, label: EEngineType.toString(element) }));

export const driveTypeArray = removeRepetitiveArr(Object.values(EDriveType))
  .filter((el) => el !== -2)
  .map((element) => ({
    value: element,
    label: EDriveType.toString(element),
  }));
