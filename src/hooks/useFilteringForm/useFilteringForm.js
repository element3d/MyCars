import { useCallback, useState } from "react";

import { gMakes } from "../../../enums/Makes";
import { _getEMakeValues } from "@/components/dependencies/utils";
import { EEngine, EModel, ESerie } from "../../../enums/Enums";
import {
  bodyTypesArray,
  transmissionArray,
  engineArray,
  driveTypeArray,
} from "./useFilteringForm.utils";

const formDataInitialValues = {
  radio: "all",
};

export default function useFilteringForm() {
  const [formData, setFormData] = useState(formDataInitialValues);

  const getSeries = useCallback(() => {
    if (formData.make) {
      return Object.keys(gMakes[formData.make]);
    }
    return [];
  }, [formData.make]);

  const getGenerations = useCallback(() => {
    if (formData.make && formData.series) {
      return Object.keys(gMakes[formData.make][formData.series]);
    }
    return [];
  }, [formData.make, formData.series]);

  const getModels = useCallback(() => {
    if (formData.make && formData.series && formData.generation) {
      return Object.keys(
        gMakes[formData.make][formData.series][formData.generation],
      );
    }
    return [];
  }, [formData.generation, formData.make, formData.series]);

  const handleFilteringFormChange = useCallback((e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleFormSelectChange = useCallback((value, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const allCarsArray = _getEMakeValues().map((element) => ({
    value: element,
    label: element.toUpperCase(),
  }));
  const carSeriesArray = getSeries().map((element) => ({
    value: element,
    label: ESerie.toString(element),
  }));
  const carGenerationsArray = getGenerations().map((element) => ({
    value: element,
    label: EModel.toString(element),
  }));

  const carModelArray = getModels().map((element) => ({
    value: element,
    label: EEngine.toString(element),
  }));

  const clearStateNameBased = useCallback((name) => {
    setFormData((prevState) => {
      const updatedData = { ...prevState };
      switch (name) {
        case "make":
          delete updatedData.series;
          delete updatedData.generation;
          delete updatedData.model;
          break;
        case "series":
          delete updatedData.generation;
          delete updatedData.model;
          break;
        case "generation":
          delete updatedData.model;
          break;
        default:
          break;
      }
      return updatedData;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    //   SUBMIT FUNCTION HERE IF THERE WOULD BE ANY TYPE OF SUBMIT FUNCTIONALITY
  }, []);

  return {
    formData,
    handleFilteringFormChange,
    handleFormSelectChange,
    handleSubmit,
    clearStateNameBased,
    allCarsArray,
    carSeriesArray,
    carGenerationsArray,
    carModelArray,
    bodyTypesArray,
    transmissionArray,
    engineArray,
    driveTypeArray,
  };
}
