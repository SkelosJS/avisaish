import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/style.css";

export default class Footer extends Component {
    render() {
        return(
            <div>
              <footer>
                <div className="footer-container">    
      
                  <ul>
                  <h1>Contact:</h1>
                  <li id="item"><a href="https://discord.gg/7cnTNApZpH">DracoSolaris'server</a></li>

                  <h1>Version du bot:</h1>
                  <li id="item2">v2</li>

                  <h1>Version du site:</h1>
                  <li id="item3">v5</li>

                  <Link to="/avis-utilisateur"><i className="fas fa-plus-circle"></i> Ajouter un avis</Link>
                </ul>

                </div>
              </footer>
            </div>
        )
    }
}