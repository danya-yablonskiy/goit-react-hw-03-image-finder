import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export function ImageGallery({ images, showModal }) {
  return (
    
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} showModal={showModal} />
      ))}
    </ul>
  );
}
