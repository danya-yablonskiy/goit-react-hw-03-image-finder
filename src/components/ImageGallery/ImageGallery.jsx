import { Component } from 'react';
import { getSearchImage } from '../api/getSearchImage';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: null,
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.searhQuerry !== this.props.searhQuerry) {
      getSearchImage(this.props.searhQuerry, this.props.page).then(
        ({ hits }) => {
          const images = this.props.images;
          console.log(images);
          if (images) {
            this.setState({
              images: [...hits, ...images],
            });
          }
          this.setState({
            images: [...hits],
          });
        }
      );
    }
  }

  render() {
    return (
      <>
        <ul className="gallery">
          <ImageGalleryItem images={this.state.images} />
        </ul>
      </>
    );
  }
}
