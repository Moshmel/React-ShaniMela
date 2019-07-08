import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import apiService from "../services/api-service";
import { withRouter } from "react-router-dom";

class RegisterModal extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    email: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async () => {
    const { username, password, email, confirmPassword } = this.state;
    if (username && password === confirmPassword && email) {
      try {
        const res = await apiService.handleRegister({
          username,
          password,
          email
        });
        const { setUser } = this.props.store;
        setUser({ username, email });
        this.props.history.push("/");
      } catch (e) {
 
      }
    }
  };
  render() {
    window.scrollTo(0, 0);
    return (
      <section className="register-modal slide-in-fwd-center marginTop">
        <div className="register-modal-container">
          <h1>הרשמה</h1>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="שם משתמש"
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="אימייל"
          />

          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="סיסמא"
          />
          <input
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            placeholder="אשר סיסמא"
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
          <div className="or-section">
            <span className="or-word">או</span>
          </div>

          <div className="social-register">
            <div className="social-connect-btn facebook-btn">
              <h3>התחבר עם פייסבוק</h3>
            </div>
            <div className="social-connect-btn google-btn">
              <img src="https://res.cloudinary.com/explority/image/upload/v1560599428/btn_google_signin_light_pressed_web_2x_ifmqr4.png" alt="connect with facebook"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default inject("store")(observer(withRouter(RegisterModal)));
