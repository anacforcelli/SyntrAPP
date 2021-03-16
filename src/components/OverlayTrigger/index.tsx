import React, { Component } from "react";
import Modal from 'react-modal';
import "./styles.css";

Modal.setAppElement('#page-content');

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
            contentLabel="modal-content"
        >
          <div className="modal-title">{this.props.title}</div>
          <button className="close-button" onClick={this.handleCloseModal}>X</button>
          <div className="modal-children">{this.props.children}</div>
          <div className="button-div">{this.props.buttonBox}</div>
        </Modal>
      </div>
    );
  }
}

export default OverlayTrigger;