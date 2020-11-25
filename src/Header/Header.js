import { category } from './Header-config.js';
//import logo from './logo.svg';
import './Header.css';

const config = require("./Header-config.js");
console.log(config.category);

function Header() {
  return (
    <div className="Header-body">
        <div className="header-line">
            <div className="vertical-center logo">
                Canada no worries
            </div>
            <div className="vertical-center search-bar-area">
                <input type="text" id="search">
                </input>
                <select name="category" id="category">
                    {Object.keys(config.category).map(function(a) {
                    return (
                        <option value={a}>{a}</option>
                    );
                    })}
                </select>
                <select name="area" id="area">
                    <option value="Canada">Canada</option>
                </select>
            </div>
        </div>
        <div className="tag-line">

        </div>
    </div>
  );
}

export default Header;


