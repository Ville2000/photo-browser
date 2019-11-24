import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import PhotoListItem from "../PhotoListItem/PhotoListItem";
import photoApi from "../services/photoApiService";
import styles from "./PhotoList.module.css";
import PhotoResultCountSelect from "../PhotoListResultCountSelect/PhotoResultCountSelector";
import PhotoListPaginator from "../PhotoListPaginator/PhotoListPaginator";

const PhotoList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [queryParams, setQueryParams] = useState({ _limit: 25, _page: 1 });
  useEffect(() => {
    setIsLoading(true);
    listPhotos(queryParams);
  }, [queryParams]);

  const listPhotos = async (queryParams = null) => {
    const photos = await photoApi.listPhotos({ params: queryParams });
    setPhotos(photos);
    setIsLoading(false);
  };

  const onPageSelect = val => {
    if (queryParams._page + val > 0) {
      setQueryParams({ ...queryParams, _page: queryParams._page + val });
    }
  };

  return (
    <>
      <div className={styles.photoList__queryOptions}>
        <PhotoListPaginator
          className={styles.photoList__queryOptions__paginator}
          currentPage={queryParams._page}
          selectPage={onPageSelect}
        />
        <PhotoResultCountSelect
          className={styles.photoList__queryOptions__resultCount}
          options={[5, 10, 25, 50, 100]}
          selectedOption={queryParams._limit}
          selectOption={_limit => setQueryParams({ ...queryParams, _limit })}
        />
      </div>

      {isLoading ? (
        <div className={styles.photoList__loaderContainer}>
          <Loader type="Oval"></Loader>
        </div>
      ) : (
        <ul className={styles.photoList__list}>
          {photos.map(photo => (
            <PhotoListItem
              key={photo.id}
              id={photo.id}
              title={photo.title}
              thumbnailUrl={photo.thumbnailUrl}
            />
          ))}
        </ul>
      )}
      {!isLoading && queryParams._limit > 10 && (
        <div className={styles.photoList__bottomQueryOptions}>
          <PhotoListPaginator
            currentPage={queryParams._page}
            selectPage={onPageSelect}
          />
        </div>
      )}
    </>
  );
};

export default PhotoList;
