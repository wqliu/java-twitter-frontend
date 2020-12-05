import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class ForRent extends React.Component {
    constructor(){
        super();
        this.state = {
            persons: "",
            priceModalIsOpen:false,
            //setIsOpen:false
            bedsandbathsModalIsOpen:false,
            hometypeModalIsOpen:false,
            minPrice:0,
            maxPrice:0
        }
        this.priceOpenModal = this.priceOpenModal.bind(this);
        this.priceCloseModal = this.priceCloseModal.bind(this);
        this.priceAfterOpenModal = this.priceAfterOpenModal.bind(this);
        this.bedsandbathsOpenModal = this.bedsandbathsOpenModal.bind(this);
        this.bedsandbathsCloseModal = this.bedsandbathsCloseModal.bind(this);
        this.bedsandbathsAfterOpenModal = this.bedsandbathsAfterOpenModal.bind(this);
        this.hometypeOpenModal = this.hometypeOpenModal.bind(this);
        this.hometypeCloseModal = this.hometypeCloseModal.bind(this);
        this.hometypeAfterOpenModal = this.hometypeAfterOpenModal.bind(this);
        this.handleMinPrice = this.handleMinPrice.bind(this);
    }
    priceOpenModal() {
        this.setState({priceModalIsOpen:true});
    }
     
    priceAfterOpenModal() {
        //this.state.subtitle.style.color = '#f00';
    }
     
    priceCloseModal(){
        this.setState({priceModalIsOpen:false});
    }
    bedsandbathsOpenModal() {
        this.setState({bedsandbathsModalIsOpen:true});
    }
     
    bedsandbathsAfterOpenModal() {
        //this.state.subtitle.style.color = '#f00';
    }
     
    bedsandbathsCloseModal(){
        this.setState({bedsandbathsModalIsOpen:false});
    }
    hometypeOpenModal() {
        this.setState({hometypeModalIsOpen:true});
    }
     
    hometypeAfterOpenModal() {
        //this.state.subtitle.style.color = '#f00';
    }
     
    hometypeCloseModal(){
        this.setState({hometypeModalIsOpen:false});
    }

    handleMinPrice(event){
        this.setState({minPrice: event.target.value});
    }
    render(){
        return(
            <div>
                <div>
                    <span>
                        <button onClick={this.priceOpenModal}>Price</button>
                        <Modal isOpen={this.state.priceModalIsOpen}
                            onAfterOpen={this.priceAfterOpenModal}
                            onRequestClose={this.priceCloseModal}
                            style={customStyles}
                            contentLabel="Example Price Modal"
                        >    
                        <div>I am a price modal</div>
                        <form>
                            <input type="text" value={this.state.minPrice} onChange={this.handleMinPrice}/>
                            <input type="submit" value="Submit" />
                        </form>
                        <button onClick={this.priceCloseModal}>close</button>
                        </Modal>
                    </span>
                    <span>
                        <button onClick={this.bedsandbathsOpenModal}>bedsandbaths</button>
                        <Modal isOpen={this.state.bedsandbathsModalIsOpen}
                            onAfterOpen={this.bedsandbathsAfterOpenModal}
                            onRequestClose={this.bedsandbathsCloseModal}
                            style={customStyles}
                            contentLabel="Example bedsandbaths Modal"
                        >    
                        <button onClick={this.bedsandbathsCloseModal}>close</button>
                        <div>I am a bedsandbaths modal</div>
                        <form>
                            <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button>
                        </form>
                        </Modal>
                    </span>
                    <span>
                        <button onClick={this.hometypeOpenModal}>hometype</button>
                        <Modal isOpen={this.state.hometypeModalIsOpen}
                            onAfterOpen={this.hometypeAfterOpenModal}
                            onRequestClose={this.hometypeCloseModal}
                            style={customStyles}
                            contentLabel="Example hometype Modal"
                        >    
                        <button onClick={this.hometypeCloseModal}>close</button>
                        <div>I am a hometype modal</div>
                        <form>
                            <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button>
                        </form>
                        </Modal>
                    </span>
                </div>
            </div>
        )
    }
}

export default ForRent;


