export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images &&
        images.map(image => (
          <li className="gallery-item" key={image.id}>
            <img src={image.webformatURL} alt="" />
          </li>
        ))}
    </>
  );
};
