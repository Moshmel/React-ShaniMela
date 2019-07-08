import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// Pages
import HomPage from "./Pages/HomPage";
import ServicesList from "./components/ServicesList";
import Contact from "./Pages/Contact";
import Recommended from "./Pages/Recommended";
import Gallery from "./Pages/Gallery";
import ServiceDetails from "./Pages/ServiceDetails";
import PromParty from "./components/PromParty";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./components/Footer";

export default class Router extends Component {
  render() {
 

    return (
      <HashRouter>
        <NavBar />
        <Route exact path="/" component={HomPage} />
        <Route exact path="/about" component={HomPage} />
        <Route exact path="/workshops" component={ServicesList} />
        <Route path="/workshops/:id" component={ServiceDetails} />
        <Route path="/promparty" component={PromParty} />
        <Route path="/contact" component={Contact} />
        <Route path="/recommended" component={Recommended} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer />
      </HashRouter>
    );
  }
}
