import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement(document.getElementById("root"));

const ImageModal = ({ isOpen, photo, closeModal }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      height: "90%",
      border: "none",
      padding: "0",
      margin: "0",
      overflow: "hidden",
      outline: "none",
      WebkitOverflowScrolling: "touch",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      style={customStyles}
    >
      <img
        className={css.imgModal}
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
      <p>{photo.alt_description}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ImageModal;
