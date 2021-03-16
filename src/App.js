import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

import Navbar from './components/Navbar.component';
import MainPage from './components/Container.component';
import Footer from './components/Footer.component';
import RenderAvislist from './components/avislist.component';
import CreateAvis from './components/create-avis.component';

function App() {
  return (
      <Router>
        <div>
          <Route path="/" exact component={Navbar} />
          <Route path="/" exact component={MainPage} />
          <Route path="/" exact component={Footer} />

          <Route path="/votre-avis" exact component={RenderAvislist} />
          <Route path="/avis-utilisateur" component={CreateAvis} /> 
        </div>
      </Router>
  );
}

export default App;
