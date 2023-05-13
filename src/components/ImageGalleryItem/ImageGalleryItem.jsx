export const ImageGalleryItem = ({ image, showModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => showModal(image.largeImageURL)}
      />
    </li>
  );
};
