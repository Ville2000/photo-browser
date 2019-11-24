import React, { useState, useEffect } from "react";
import photoApiService from "../services/photoApiService";
import albumApiService from "../services/albumApiService";
import userApiService from "../services/userApiService";
import Loader from "react-loader-spinner";
import styles from "./PhotoDetails.module.css";

const PhotoDetails = ({ photoId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState(undefined);
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    setIsLoading(true);

    const loadPhotoData = async photoId => {
      const photoData = await photoApiService.getPhoto(photoId);
      const albumData = await albumApiService.getAlbumById(photoData.albumId);
      const userData = await userApiService.getUserById(albumData.userId);
      return { photoData, userData };
    };

    loadPhotoData(photoId).then(({ photoData, userData }) => {
      setPhoto(photoData);
      setUser(userData);
    });
  }, [photoId]);

  return (
    <>
      {photo && (
        <img
          className={styles.photoDetails__photo}
          src={photo.url}
          alt=""
          onLoad={() => setIsLoading(false)}
        />
      )}

      {isLoading ? (
        <div className={styles.photodetails__loaderContainer}>
          <Loader type="Oval" />
        </div>
      ) : (
        photo && (
          <>
            <div className={styles.photoDetails__infoContainer}>
              <h2 className={styles.photoDetails__infoContainer__title}>
                {photo.title}
              </h2>
              {user && (
                <div className={styles.photoDetails__infoContainer__userInfo}>
                  <div>
                    By: {user.username} ({user.name})
                  </div>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                  <a href={`http://${user.website}`}>{user.website}</a>
                </div>
              )}
            </div>
          </>
        )
      )}
    </>
  );
};

export default PhotoDetails;
