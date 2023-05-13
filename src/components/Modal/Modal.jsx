import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div
        className="Overlay"
        onClick={this.handleOverlayClick || this.handleKeyDown}
      >
        <div className="Modal">
          <img src={this.props.modalImgUrl} alt="" />
        </div>
      </div>
    );
  }
}
