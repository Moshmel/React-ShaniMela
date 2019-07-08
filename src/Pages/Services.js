import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { HashRouter, Route, Switch } from 'react-router-dom';

// cmps
import ServicesList from '../components/ServicesList'
import PromParty from '../components/PromParty'
export default class Services extends Component{
    render(){
        return(
            <section className="services slide-in-fwd-center">
            <div className="side-nav">
           <NavLink exact className="Nav_link" to="/services/graduation-party">
               <h1>מופעי סיום</h1>
            </NavLink> 
           <NavLink exact className="Nav_link" to="/services/workshops">
               <h1>סדנאות</h1>
            </NavLink> 

            </div>
            {/* <ServicesList/> */}
            <Route path={'/services/workshops'} component={ServicesList}/>
            <Route path={'/services/graduation-party'} component={PromParty}/>
            </section>
            )

    }
}