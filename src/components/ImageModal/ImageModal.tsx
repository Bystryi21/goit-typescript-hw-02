import Modal from "react-modal";
Modal.setAppElement("#root");

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
    // objectFit: "contain",
  },
};

interface ImageModalInterface {
  isOpen: boolean;
  onRequestClose: () => void;
  src: string;
}

export default function ImageModal({
  isOpen,
  onRequestClose,
  src,
}: ImageModalInterface) {
  return (
    <Modal
      style={stylesForModal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      {/* {selectedImage && ( */}
      <img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        alt="Selected"
      />
      {/* } */}
    </Modal>
  );
}
