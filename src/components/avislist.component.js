import React, { Component } from "react";
import axios from 'axios';
import "../style/avislist.css";

const RendAvis = props => {
    return (
        <div className="card carte-avis"><h4>{props.avisl.description}</h4></div>
    )
}

export default class RenderAvislist extends Component {
    constructor(props) {
        super(props);

        this.state = {avislist: []};
    }

    componentDidMount() {
        const port = process.env.PORT || 5000;
        
        axios.get(`http://localhost:${port}/avis/`)
        .then(response => {
            this.setState({ avislist: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    renderAvislist() {
        return this.state.avislist.map(currentavis => {
            return <RendAvis avisl={currentavis} key={currentavis._id} />
        })
    }

    render() {
        return (
            <div>
            <body className="avislist-body">
                <div className="card">
                  <div className="card-header"><h1>Avis-Utilisateur</h1></div>
                  <div className="card-body">{ this.renderAvislist() }</div>
                  <div className="card-footer"><span className="text-muted">Avis du Bot par les utilisateurs</span></div>
                </div>
            </body>
            </div>
        )
    }
}
