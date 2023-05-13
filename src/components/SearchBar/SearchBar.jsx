import { Component } from 'react';
export class SearchBar extends Component {
  state = {
    q: '',
  };

  handleChange = e => {
    this.setState({
      q: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.q.trim() === '') {
      alert('Enter something');
      return;
    }
    this.props.onSubmit(this.state.q);
    this.setState({ q: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            onChange={this.handleChange}
            value={this.state.q}
          />
        </form>
      </header>
    );
  }
}
