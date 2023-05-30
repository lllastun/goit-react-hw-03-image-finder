import React, { Component } from 'react';
import { ModalWrapper, ModalContent } from './Modal.style';

const modalDiv = document.querySelector('#modal');

class Modal extends Component {
  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { onClose, children } = this.props;
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
