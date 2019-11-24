import React, { useState } from "react";
import { Link } from "@reach/router";
import Loader from "react-loader-spinner";
import styles from "./PhotoListItem.module.css";

const PhotoListItem = ({ id, title, thumbnailUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(false);

  return (
    <li
      className={styles.photoListItem}
      onMouseEnter={() => setDisplayTitle(true)}
      onMouseLeave={() => setDisplayTitle(false)}
    >
      <img
        className={styles.photoListItem__img}
        onLoad={() => setIsLoaded(true)}
        src={thumbnailUrl}
        alt=""
        style={displayTitle ? { transform: "scale(1.025" } : {}}
      />

      {displayTitle && (
        <Link to={`/photos/${id}`}>
          <div className={styles.photoListItem__titleContainer}>
            <p className={styles.photoListItem__titleContainer__title}>
              {title}
            </p>
          </div>
        </Link>
      )}

      {!isLoaded && (
        <div className={styles.photoListItem__imgLoader}>
          <Loader type="Oval" />
        </div>
      )}
    </li>
  );
};

export default PhotoListItem;
