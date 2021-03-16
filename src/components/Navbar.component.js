import React, { Component } from 'react';
import aishLogo from "../images/AishLogo.png";
import "../style/style.css";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navigation">
                <nav>
                    <span id="spanLogo"><img src={aishLogo} alt="AishBot" id="abLogo"/></span>
                </nav>
            </div>
        )
    }
}