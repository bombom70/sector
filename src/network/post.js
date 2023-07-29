import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = async () => {
  const { data } = await axios(BASE_URL);

  return data;
}