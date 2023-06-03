import React, { Component } from 'react';
import { ModalWrapper, ModalContent } from './Modal.style';
import PropTypes from 'prop-types';

class Modal extends Component {
  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { children } = this.props;
    return (
      <ModalWrapper onClick={this.onBackdropClick}>
        <ModalContent>
          <div className="modal">{children}</div>
        </ModalContent>
      </ModalWrapper>
    );
  }
}

export default Modal;
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
