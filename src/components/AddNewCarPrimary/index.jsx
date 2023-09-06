import React, { useCallback } from "react";

import styles from "./styles.module.css";
import AddNewCarPrimaryStats from "./AddNewCarPrimaryStats";
import { gMakes } from "../../../enums/Makes";
import { _getEMakeValues } from "../dependencies/utils";

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
  
  function getSeries() {
    return Object.keys(gMakes[selectInputValue.make]);
  }

  function getGenerations() {
    return Object.keys(gMakes[selectInputValue.make][selectInputValue.series]);
  }

  function getModels() {
    return Object.keys(
      gMakes[selectInputValue.make][selectInputValue.series][
        selectInputValue.generation
      ]
    );
  }

  return (
    <div className={styles.container}>
      <AddNewCarPrimaryStats
        data={_getEMakeValues()}
        title="Brand"
        type="make"
        onSelect={handleAddItem}
        selectInputValue={selectInputValue}
      />

      {selectInputValue.make && (
        <AddNewCarPrimaryStats
          data={getSeries()}
          title="Series"
          type="series"
          onSelect={handleAddItem}
          selectInputValue={selectInputValue}
        />
      )}
      {selectInputValue.series && (
        <AddNewCarPrimaryStats
          data={getGenerations()}
          title="Generation"
          type="generation"
          onSelect={handleAddItem}
          selectInputValue={selectInputValue}
        />
      )}
      {selectInputValue.generation && (
        <AddNewCarPrimaryStats
          data={getModels()}
          title="Model"
          type="model"
          onSelect={handleAddItem}
          selectInputValue={selectInputValue}
        />
      )}
    </div>
  );
};

export default AddNewCarPrimary;
