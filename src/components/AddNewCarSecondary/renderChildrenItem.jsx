import styles from "./styles.module.css";

// TODO: PUT TRANSLATIONS FOR VALUE

 const RenderCollapseItem = (type, collapseKey, values, getter = null, onClick) => (
  <div className={styles.flexContainer}>
    {values.map((value) => (
      <p key={value} onClick={() => onClick(value, type, collapseKey)}>
        {getter ? getter.toString(value) : value.toString()}
      </p>
    ))}
  </div>
);

export default RenderCollapseItem;