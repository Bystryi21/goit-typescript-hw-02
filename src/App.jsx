import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchedPhotos } from "./services/image-api";
import toast, { Toaster } from "react-hot-toast";
//
import Modal from "react-modal";
Modal.setAppElement("#root"); // Обов'язково для доступності

const stylesForModal = {
  overlay: {
    overflow: "hidden",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "hidden",
    objectFit: "contain",
  },
};

function App() {
  const [photos, setPhotos] = useState([]);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [maxPages, setMaxPages] = useState();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getPhoto() {
      try {
        setLoading(true);
        setError(false);
        toast.loading("🔄Loading your images", { duration: 1500 });
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

  const handleSearch = (newTopic) => {
    setPhotos([]);
    setTopic(newTopic);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  // Функції для керування модальним вікном
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
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
      {/* {loading && <div>Loading...</div>}
      {error && <div>Error..</div>} */}
      {photos.length > 0 && !loading && (
        <button type="button" onClick={handleLoadMore} className="button">
          Load More
        </button>
      )}
      {page > maxPages && <div className="notification">No more images</div>}

      <Modal
        style={stylesForModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        houldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        {/* <button onClick={closeModal}>Close</button> */}
        {selectedImage && (
          <img
            src={selectedImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            alt="Selected"
          />
        )}
      </Modal>
    </>
  );
}

export default App;
