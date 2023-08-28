import React, { useCallback } from "react";

import styles from "./styles.module.css";
import { carBrands, modelsList, generations, series } from "./data";
import AddNewCarPrimaryStats from "./AddNewCarPrimaryStats";

const AddNewCarPrimary = ({ setSelectInputValue, selectInputValue }) => {
  const handleAddItem = useCallback(
    (item, type) => {
      setSelectInputValue((prevState) => {
        const updatedState = {
          ...prevState,
          [type]: item,
        };

        const keys = Object.keys(updatedState);
        const typeIndex = keys.indexOf(type);

        for (let i = typeIndex + 1; i < keys.length; i++) {
          const currentKey = keys[i];
          updatedState[currentKey] = "";
        }

        return updatedState;
      });
    },
    [setSelectInputValue]
  );

  return (
    <div className={styles.container}>
      <AddNewCarPrimaryStats
        data={carBrands}
        title="Brand"
        type="brand"
        onSelect={handleAddItem}
        isComponentShouldSelect={selectInputValue}
      />

      {selectInputValue.brand && (
        <AddNewCarPrimaryStats
          data={series}
          title="Series"
          type="series"
          onSelect={handleAddItem}
          isComponentShouldSelect={selectInputValue}
        />
      )}
      {selectInputValue.series && (
        <AddNewCarPrimaryStats
          data={generations}
          title="Generation"
          type="generation"
          onSelect={handleAddItem}
          isComponentShouldSelect={selectInputValue}
        />
      )}
      {selectInputValue.generation && (
        <AddNewCarPrimaryStats
          data={modelsList}
          title="Model"
          type="model"
          onSelect={handleAddItem}
          isComponentShouldSelect={selectInputValue}
        />
      )}
    </div>
  );
};

export default AddNewCarPrimary;
