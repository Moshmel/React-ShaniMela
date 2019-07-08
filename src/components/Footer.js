import React from "react";
import { observer, inject } from "mobx-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <h4>ברשתות החברתיות</h4>
        <div className="social-media">
          <div className="social-buttons">
            <a
              className="social-button facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>

            <a
              className="social-button youtube"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-button instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="bottom-container flex space-between">
        <div className="fast-nav">
          <h2>ניווט מהיר</h2>
          <NavLink exact className="fast-nav-item" to="/about">
            אודות
          </NavLink>
          <NavLink className="fast-nav-item" to="/promparty">
            מופעי סיום
          </NavLink>
          <NavLink
            className="fast-nav-item"
            to="/workshops"
            activeClassName="activeRoute"
          >
            סדנאות
          </NavLink>
          <NavLink
            className="fast-nav-item"
            to="/gallery"
            activeClassName="activeRoute"
          >
            גלריה
          </NavLink>
          <NavLink
            className="fast-nav-item"
            to="/contact"
            activeClassName="activeRoute"
          >
            צור-קשר
          </NavLink>
          <NavLink
            className="fast-nav-item"
            to="/login"
            activeClassName="activeRoute"
          >
            הרשם/התחבר
          </NavLink>
        </div>
        <h1 className="logo">ShaniMela</h1>
        </div>
      </div>

      <h4>Made by MoshMel</h4>
    </section>
  );
};
export default inject("store")(observer(Footer));
