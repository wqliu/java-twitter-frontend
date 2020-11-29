//import logo from './logo.svg';
import React from 'react';
import './Header.css';
import {Redirect} from "react-router-dom";

const config = require("./Header-config.js");

class Header extends React.Component {
    constructor(){
        super();
        let options = ["All Categories"];
        let recommended_options = [];
        for(const i in config.category["All Categories"]){
            options.push(i);
            recommended_options.push(i);
        }
        this.state = {
            area : "Canada",
            category : "All Categories",
            redirect: false,
            options:options,
            recommended_options:recommended_options
        }
        this.setCategory = this.setCategory.bind(this);
        this.setArea = this.setArea.bind(this);
        this.setCategoryValue = this.setCategoryValue.bind(this);
    }

    setCategory(event){ 
        this.setCategoryValue(event.target.value);
    }

    async setCategoryValue(category_value){
        if(category_value === "All Categories"){
            let options = ["All Categories"];
            let recommended_options = [];
            for(const i in config.category["All Categories"]){
                options.push(i);
                recommended_options.push(i);
            }
            await this.setState({options:options,recommended_options:recommended_options});
        }
        else if(category_value in config.category["All Categories"]){
            let options = ["All Categories"];
            let recommended_options = [];
            for(const i in config.category["All Categories"]){
                options.push(i);
            }   
            for(const i in config.category["All Categories"][category_value]){
                options.push(i);
                recommended_options.push(i);
            }
            await this.setState({options:options,recommended_options:recommended_options});
        }
        else{
            await this.setState({recommended_options:[]});
        }
        await this.setState({category:category_value,redirect:true},()=>{console.log(this.state.category)});
        return;
    }

    setArea(){
        return 3;
        //this.setState({area:category_value},()=>{console.log(this.state.area)});
    }

    cleanUrl(s){
        return String(s).replace(/[^a-zA-Z ]/g, " ").toLowerCase().split(/[ ]+/).join('-');
    }

    render(){
        const result = [];
        const rec_options = [];
        for(let i=0;i<this.state.recommended_options.length;i++){
            rec_options.push(<a href="true" className="recommended-options-link" onClick={()=>{this.setCategoryValue(this.state.recommended_options[i])}}>{this.state.recommended_options[i]}</a>);
        }
        rec_options.push(<a href="true" className="recommended-options-link" onClick={()=>{this.setCategoryValue("All Categories")}}>Main Page</a>);
        result.push(
            <div className="Header-body">
                <div className="header-line">
                    <div className="vertical-center logo">
                        Canada no worries
                    </div>
                    <div className="vertical-center search-bar-area">
                        <input type="text" id="search" className="search-bar">
                        </input>
                        <select name="category" id="category" value={this.state.category} className="search-bar-selection" onChange={this.setCategory}>
                            {(this.state.options).map(function(a) {
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
                <div className="recommended-options">
                    {rec_options}
                </div>
            </div>
        );
        if (this.state.redirect) {
            if(this.state.category!=="All Categories"){
                const url = '/' + this.cleanUrl(this.state.category) + '/' + this.cleanUrl(this.state.area);
                result.push(<Redirect to={url} />);
            }
            else{
                result.push(<Redirect to="/" />);
            }
        }
        return result;
    }
}

export default Header;


