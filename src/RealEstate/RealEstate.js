import React from 'react';
import "../index.css";
import {BrowserRouter as Router, Link} from "react-router-dom";

class RealEstate extends React.Component {
    constructor(){
        super();
        console.log("hello");
    }
    render(){
        return(
            <div>
                For sale For rent
            </div>
        )
    }
}

export default RealEstate;


