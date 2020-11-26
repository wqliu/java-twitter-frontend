//import logo from './logo.svg';
import React from 'react';
import './Header.css';
import {Redirect} from "react-router-dom";

const config = require("./Header-config.js");

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            area : "Canada",
            category : "All Categories",
            redirect: false
        }
        this.setCategory = this.setCategory.bind(this);
        this.setArea = this.setArea.bind(this);
    }

    setCategory(event){
        this.setState({category:event.target.value,redirect:true},()=>{console.log(this.state.category)});
        //this.props.history.push('/real-estate');
        
    }

    setArea(event){
        this.setState({area:event.target.value},()=>{console.log(this.state.area)});
    }

    cleanUrl(s){
        return String(s).replace(/[^a-zA-Z ]/g, " ").toLowerCase().split(/[ ]+/).join('-');
    }

    render(){
        const result = [];
        result.push(
            <div className="Header-body">
                <div className="header-line">
                    <div className="vertical-center logo">
                        Canada no worries
                    </div>
                    <div className="vertical-center search-bar-area">
                        <input type="text" id="search" className="search-bar">
                        </input>
                        <select name="category" id="category" className="search-bar-selection" onChange={this.setCategory}>
                            <option value="All Categories">All Categories</option>
                            {Object.keys(config.category).map(function(a) {
                            return (
                                <option value={a}>{a}</option>
                            );
                            })}
                        </select>
                        <select name="area" id="area" className="search-bar-selection" onChange={this.setArea}>
                            <option value="Canada">Canada</option>
                            {Object.keys(config.geographic_area.Canada).map(function(a) {
                            return (
                                <option value={a}>{a}</option>
                            );
                            })}
                        </select>
                    </div>
                    <div className="vertical-center login-area">
                        Login/Register
                    </div>
                </div>
                <div className="tag-line">

                </div>
            </div>
        );
        if (this.state.redirect) {
            const url = '/' + this.cleanUrl(this.state.category) + '/' + this.cleanUrl(this.state.area);
            result.push(<Redirect to={url} />);
        }
        return result;
    }
}

export default Header;


