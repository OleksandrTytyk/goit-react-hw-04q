import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { requestPhoto } from "../services/api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  // const [showBtn, setShowBtn] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const data = await requestPhoto(searchQuery, page);
        const newPhotos = data.results;

        // setShowBtn(data.total_pages && data.total_pages !== page);

        setPhotos((prevPhotos) =>
          prevPhotos ? [...prevPhotos, ...newPhotos] : newPhotos
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchQuery, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onSearchImgQuery = (query) => {
    if (query !== searchQuery) {
      // setShowBtn(false);

      setPhotos([]);
    }

    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={onSearchImgQuery} />
      {isLoading && <Loader />}
      {photos !== null && photos.length > 0 && (
        <ImageGallery photos={photos} openModal={openModal} />
      )}
      {photos !== null && photos.length > 0 && (
        <LoadMoreBtn
          onLoadMore={handleLoadMore}
          hasMoreImages={photos && photos.length > 0}
        />
      )}
      {selectedPhoto && (
        <ImageModal
          isOpen={modalIsOpen}
          photo={selectedPhoto}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
