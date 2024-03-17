import axios from "axios";

const API_KEY = "YinxtRt2O16TNTNo1qbx7p0n0D5x1SYDWb9bNJHg6F0";
const PER_PAGE = 12;

export const requestPhoto = async (searchQuery, page) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: API_KEY,
      query: searchQuery,
      per_page: PER_PAGE,
      page: page,
    },
  });
  return data;
};
