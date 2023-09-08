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
  
  function getClass() {
    return Object.keys(gMakes[selectInputValue.make]);
  }

  function getModels() {
    return Object.keys(gMakes[selectInputValue.make][selectInputValue.class]);
  }

  function getSubModels() {
    return Object.keys(
      gMakes[selectInputValue.make][selectInputValue.class][
        selectInputValue.model
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
          data={getClass()}
          title="Series"
          type="class"
          onSelect={handleAddItem}
          selectInputValue={selectInputValue}
        />
      )}
      {selectInputValue.class && (
        <AddNewCarPrimaryStats
          data={getModels()}
          title="Generation"
          type="model"
          onSelect={handleAddItem}
          selectInputValue={selectInputValue}
        />
      )}
      {selectInputValue.model && (
        <AddNewCarPrimaryStats
          data={getSubModels()}
          title="Model"
          type="submodel"
          onSelect={handleAddItem}
          selectInputValue={selectInputValue}
        />
      )}
    </div>
  );
};

export default AddNewCarPrimary;
