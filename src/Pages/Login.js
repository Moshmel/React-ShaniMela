import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import apiService from "../services/api-service";
import { NavLink, withRouter } from "react-router-dom";

class LoginModal extends Component {
  state = {
    username: "",
    password: ""
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value }, () => {});
  };
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };
  handleSubmit = async () => {
    const { username, password } = this.state;
    if (username && password) {
      const res = await apiService.handleLogin({ username, password });

      if (res) {
        const { setUser } = this.props.store;
                setUser(res);
        this.props.history.push("/");
      } else {
      }
    }
  };
  render() {
    window.scrollTo(0, 0);
    return (
      <section className="login-modal slide-in-fwd-center marginTop">
        <div className="login-modal-container">
          <h1>התחבר</h1>
          <div className="social-login">
            <div className="social-connect-btn facebook-btn">
              <h3>התחבר עם פייסבוק</h3>
            </div>
            <div className="social-connect-btn google-btn">
              <img src="https://res.cloudinary.com/explority/image/upload/v1560599428/btn_google_signin_light_pressed_web_2x_ifmqr4.png" alt="google sign in" />
            </div>
            <div className="or-section">
              <span className="or-word">או</span>
            </div>
          </div>
          <input
            type="text"
            onChange={this.handleUsernameChange}
            placeholder="שם משתמש"
          />

          <input
            type="password"
            onChange={this.handlePasswordChange}
            placeholder="סיסמא"
          />

          <div className="flex">
            <button
              type="button"
              className="submit-btn"
              onClick={this.handleSubmit}
            >
              שלח
            </button>
          </div>
          <div>
            <NavLink exact className="Nav_link" to="/register">
              הרשמה
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default inject("store")(observer(withRouter(LoginModal)));
