import React, { Component } from 'react';
import axios from 'axios';
import "../style/create.css";
import { Link } from "react-router-dom";


export default class CreateAvis extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: ''
        }
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const noticed = {
            description: this.state.description
        }

        console.log(noticed);
        
        const port = process.env.PORT || 5000;

        axios.post(`http://localhost:${port}/avis/add/`, noticed)
        .then(res => console.log(res.data));

        window.location = "/votre-avis";
    }

    render() {
        return (
            <div>
            <body className="create-avis">
                <form onSubmit={this.onSubmit}>
                    <div className="formulaire">
                        <h1>Laissez-nous votre avis:</h1>
                        <br/>
                        <input type="text"
                          required
                          placeholder="Votre avis"
                          className="formulaire-input"
                          value={this.state.description}
                          onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="formulaire-submit">
                    <br/>
                        <input type="submit" value="Envoyer votre avis" className="btn btn-primary" />
                    </div>
                </form>

                <div className="noAvis">
                  <br/>
                  <p>Vous n'avez pas d'avis ? <Link to="/votre-avis">Venez regarder les avis des autres</Link></p>
                </div>
                </body>
            </div>
        )
    }
}
