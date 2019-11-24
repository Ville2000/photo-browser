import React from "react";
import styles from "./PhotoResultCountSelect.module.css";

const PhotoResultCountSelect = ({
  selectedOption,
  options,
  selectOption,
  className
}) => {
  return (
    <div className={`${styles.resultCountSelectContainer} ${className}`}>
      <label htmlFor="queryLimiter">Results per page</label>
      <select
        id="queryLimiter"
        value={selectedOption}
        onChange={({ target }) => selectOption(target.value)}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PhotoResultCountSelect;
