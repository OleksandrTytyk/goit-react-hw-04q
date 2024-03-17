import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { requestPhoto } from "../services/api";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [showLoadMoreBtn, setshowLoadMoreBtn] = useState(false);

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
        if (!searchQuery) return;

        setIsLoading(true);
        setIsError(false);
        setshowLoadMoreBtn(false);

        const data = await requestPhoto(searchQuery, page);
        const newPhotos = data.results;

        if (newPhotos.length === 0) {
          return toast.error("Enter a correct query");
        }

        setshowLoadMoreBtn(data.total_pages > page);

        setPhotos((prevPhotos) =>
          prevPhotos ? [...prevPhotos, ...newPhotos] : newPhotos
        );
      } catch (error) {
        setIsError(true);
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
      setshowLoadMoreBtn(false);

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
      {showLoadMoreBtn && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      {isError && <ErrorMessage />}
      {selectedPhoto && (
        <ImageModal
          isOpen={modalIsOpen}
          photo={selectedPhoto}
          closeModal={closeModal}
        />
      )}
      <Toaster position="down-center" />
    </>
  );
}

export default App;
