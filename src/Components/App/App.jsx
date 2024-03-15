import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";
// import css from "./App.module.css";
const API_KEY = "YinxtRt2O16TNTNo1qbx7p0n0D5x1SYDWb9bNJHg6F0";
// axios.defaults.baseURL = "https://api.unsplash.com/";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            client_id: API_KEY,
            query: searchQuery,
            per_page: 20,
          },
        }
      );
      setPhotos(data.results);
    }
    fetchData();
  }, [searchQuery]);

  const onSearchImgQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={onSearchImgQuery} />
      <ImageGallery photos={photos} />
    </>
  );
}

export default App;
