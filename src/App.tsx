import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchedPhotos } from "./services/image-api";
import toast, { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { InterfaceImage } from "./types";

import ImageModal from "./components/ImageModal/ImageModal";
// import { string } from "yup";

function App() {
  const [photos, setPhotos] = useState<InterfaceImage[]>([]);
  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [maxPages, setMaxPages] = useState<number>(0);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getPhoto(): Promise<void> {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchedPhotos(topic, page);
        setPhotos((prevImage) => [...prevImage, ...res.images]);
        setMaxPages(res.totalPages);

        if (page > 1) {
          smoothScroll();
        }
      } catch (error) {
        setError(true);
        toast.dismiss();
        toast.error("❌You have a bad request", { duration: 1500 });
      } finally {
        setLoading(false);
      }
    }
    getPhoto();
  }, [topic, page]);

  const handleSearch = (newTopic: string): void => {
    setPhotos([]);
    setTopic(newTopic);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      <Toaster />

      {photos.length > 0 && (
        <ImageGallery photos={photos} onImageClick={openModal} />
      )}

      {loading && <Loader />}

      {photos.length > 0 && !loading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}

      {page > maxPages && !loading && (
        <div className="notification">No more images</div>
      )}

      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          src={selectedImage}
        />
      )}
      {error && <ErrorMessage />}
    </>
  );
}

export default App;
