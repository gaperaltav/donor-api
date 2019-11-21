import React, { Component } from 'react';
import props from './props';
import style from './style';
import { Modal, Fade, ClickAwayListener, Paper  } from '@material-ui/core';

class NewDonationModal extends Component {

  renderModalContent = () => (
    <Paper style={style.modal} >
      <div>
        <h2 id="simple-modal-title">Text in a modal</h2>
      </div>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
    </Paper>
  )

  render() {
    const {
      isOpen,
      onClose,
    } = this.props;

    return (
      <Modal
        open={isOpen}
        contentLabel="Example Modal"
        closeAfterTransition
        enableBackdropClick
      >
        <ClickAwayListener onClickAway={onClose}>
          <Fade in={isOpen} >
            {this.renderModalContent()}
          </Fade>
        </ClickAwayListener>
      </Modal>
    );
  }
}

NewDonationModal.propTypes = {
  ...props,
};

export default NewDonationModal;