import css from "./ImageCard.module.css";

const ImageCard = ({ photo, openModal }) => {
  return (
    <div onClick={() => openModal(photo)} className={css.imgCard}>
      <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
  );
};

export default ImageCard;
