import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  toggleNavbar = () => {
    let linksEl = document.querySelector(".navbar-narrow-items");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };
  onDisconnect = () => {
    const { disconnectUser } = this.props.store;
    disconnectUser();

  };

  render() {
    const { isUserLoggedOn } = this.props.store;
    const logoEl = <h1 className="logo">ShaniMela</h1>;
    const navBarItemsEl = (
      <div>
        <NavLink exact className="Nav_link" to="/about">
          אודות
        </NavLink>
        <NavLink className="Nav_link" to="/promparty">
          מופעי סיום
        </NavLink>
        <NavLink
          className="Nav_link"
          to="/workshops"
          activeClassName="activeRoute"
        >
          סדנאות
        </NavLink>
        <NavLink
          className="Nav_link"
          to="/gallery"
          activeClassName="activeRoute"
        >
          גלריה
        </NavLink>
        <NavLink
          className="Nav_link"
          to="/contact"
          activeClassName="activeRoute"
        >
          צור-קשר
        </NavLink>
        {! isUserLoggedOn && (
          <NavLink
            className="Nav_link"
            to="/login"
            activeClassName="activeRoute"
          >
            הרשם/התחבר
          </NavLink>
        )}

        { isUserLoggedOn && (
          <a className="Nav_link" onClick={this.onDisconnect}>
            התנתק
          </a>
        )}
      </div>
    );
    return (
      <section className=" slide-in-fwd-center">
        <div className="navbar-wide">
          <div className="navbar-wide-container">{navBarItemsEl}</div>
          {logoEl}
        </div>

        <div className="navbar-narrow">
          <div className="navbar-narrow-container">
            {logoEl}
            <i className="fas fa-bars" onClick={this.toggleNavbar} />
          </div>
          <div
            className="navbar-narrow-items   swing-in-top-fwd"
            onClick={this.toggleNavbar}
          >
            {navBarItemsEl}
          </div>
        </div>
      </section>
    );
  }
}

export default inject("store")(observer(NavBar));
