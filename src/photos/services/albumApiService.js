import axios from "axios";

const getAlbumById = async albumId => {
  if (!albumId) return undefined;

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  return data;
};

export default {
  getAlbumById
};
