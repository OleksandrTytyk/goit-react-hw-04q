import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {photos !== null &&
          photos.map((photo) => {
            return (
              <li key={photo.id}>
                <ImageCard photo={photo} openModal={openModal} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
