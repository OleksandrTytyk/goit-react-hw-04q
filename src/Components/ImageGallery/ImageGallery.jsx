const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos !== null &&
        photos.map((photo) => {
          console.log(photo);

          return (
            <li key={photo.id}>
              <img src={photo.urls.small} alt={photo.alt_description} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
