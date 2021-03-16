import React, { Component } from "react";
import '../style/style.css';

export default class MainPage extends Component {
    render() {
        return (
            <div id="container-page">
                <main>
                  <h3>AishBot est un bot communautaire, créé et développé par <a href="/#">Skelos</a> et est basé sur le serveur discord <a href="https://discord.gg/7cnTNApZpH">DracoSolaris's server</a>, ce bot permet de faire de la modération et de commandes diverses. Si vous souhaitez ajouter ce bot, cliquer sur le bouton ci-dessous.</h3>
                  <button className="addBot btn"><a href="https://discord.com/api/oauth2/authorize?client_id=802630508966182983&permissions=0&scope=bot" style={{textDecoration: 'none', color: '#fff'}}>Ajouter ce bot</a></button>
                </main>
            </div>
        )
    }
}