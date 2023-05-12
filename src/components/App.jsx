import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getSearchImage } from './api/getSearchImage';

export class App extends Component {
  state = {
    q: '',
    pictures: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      getSearchImage(this.state.q, this.state.page).then(({ hits }) => {
        this.setState({
          pictures: hits,
        });
      });
    }
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  handleFormSubmit = q => {
    this.setState({
      q,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={this.state.pictures}
          searhQuerry={this.state.q}
          page={this.state.page}
        />
        <Button onClick={this.nextPage} />
      </div>
    );
  }
}
