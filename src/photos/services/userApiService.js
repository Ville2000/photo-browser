import axios from "axios";

const getUserById = async userId => {
  if (!userId) return undefined;

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return data;
};

export default {
  getUserById
};
