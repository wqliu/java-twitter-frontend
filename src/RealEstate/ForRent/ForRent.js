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
            maxPrice:10000,
            numOfBedrooms:0,
            numOfBathrooms:0,
            hometype:"Houses",
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
        this.handleMaxPrice = this.handleMaxPrice.bind(this);
        this.handleNumOfBedrooms = this.handleNumOfBedrooms.bind(this);
        this.handleNumOfBathrooms = this.handleNumOfBathrooms.bind(this);
        this.handleHometype = this.handleHometype.bind(this);
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

    handleMaxPrice(event){
        this.setState({maxPrice: event.target.value});
    }

    handleNumOfBedrooms(event){
        this.setState({numOfBedrooms:event.target.value});
    }

    handleNumOfBathrooms(event){
        this.setState({numOfBathrooms:event.target.value});
    }

    handleHometype(event){
        this.setState({hometype:event.target.value});
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
                            <label>min
                                <input type="text" id="minPrice" value={this.state.minPrice} onChange={this.handleMinPrice}/>
                            </label>
                            <label>max
                                <input type="text" id="maxPrice" value={this.state.maxPrice} onChange={this.handleMaxPrice}/>
                            </label>
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
                        
                        <div>I am a bedsandbaths modal</div>
                        <form>
                            <label>
                                Bedrooms
                                <select value={this.state.numOfBedrooms} onChange={this.handleNumOfBedrooms}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </label>
                            <label>
                                Bathrooms
                                <select value={this.state.numOfBathrooms} onChange={this.handleNumOfBathrooms}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </label>
                        </form>
                        <button onClick={this.bedsandbathsCloseModal}>close</button>
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
                        <div>I am a hometype modal</div>
                        <form>
                            <select value={this.state.hometype} onChange={this.handleHometype}>
                                <option value="Houses">Houses</option>
                                <option value="Condos">Condos</option>
                                <option value="Apartments">Apartments</option>
                                <option value="Townhouses">Townhouses</option>
                            </select>
                        </form>
                        <button onClick={this.hometypeCloseModal}>close</button>
                        </Modal>
                    </span>
                </div>
            </div>
        )
    }
}

export default ForRent;


