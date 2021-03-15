import React, { Component } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

type Props = { title? : string, buttonBox? : any, buttonTitle : string };
type State = { showModal : boolean };


class OverlayTrigger extends Component < Props, State > {
  constructor(props : Props){
    super(props);
    this.state = {
        showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>{this.props.buttonTitle}</button>
        <Modal 
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>X</button>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default OverlayTrigger;