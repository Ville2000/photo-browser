import React from "react";
import styles from "./PhotoListPaginator.module.css";

const PhotoListPaginator = ({ currentPage, selectPage, className }) => {
  return (
    <div className={`${styles.photoListPaginator} ${className}`}>
      <button onClick={() => selectPage(-1)}>
        <span role="img" aria-label="Previous Page">
          👈
        </span>
      </button>
      <div>{`Page ${currentPage}`}</div>
      <button onClick={() => selectPage(1)}>
        <span role="img" aria-label="Previous Page">
          👉
        </span>
      </button>
    </div>
  );
};

export default PhotoListPaginator;
