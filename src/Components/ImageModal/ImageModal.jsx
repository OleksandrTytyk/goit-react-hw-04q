import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

const ImageModal = ({ isOpen, photo, closeModal }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      height: "100%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
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
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <p>{photo.alt_description}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ImageModal;
