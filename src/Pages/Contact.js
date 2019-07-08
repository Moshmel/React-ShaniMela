import React, { Component } from "react";
import { Parallax } from "react-parallax";
import apiService from "../services/api-service";
import SentModal from "../components/SentModal";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      showForm: true
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    console.log("handling..");
    e.preventDefault();
    if (this.state.name && this.state.email && this.state.message) {
      const { name, email, message } = this.state;
      apiService
        .submitForm(name, email, message)
        .then(this.setState({ showForm: false }))
        .catch(err => console.log(err));
      this.setState({ showForm: false });
    }
  };
  closeModal = () => {
    this.setState(state => ({
      showForm: !state.showForm
    }));
  };
  render() {
    var formDisplay = {
      display: this.state.showForm ? "block" : "none"
    };

    return (
      <section className="contact-page slide-in-fwd-center">
        <Parallax
          blur={0}
          bgImage={
            "https://res.cloudinary.com/explority/image/upload/c_scale,h_1303/v1557515508/connect_cn2ryu.jpg"
          }
          bgImageAlt="the cat"
          strength={300}
        >
          <div style={styles.coverImg} />
        </Parallax>
        <SentModal show={!this.state.showForm} closeModal={this.closeModal} />
        <div
          className="contact-form-container slide-in-fwd-center"
          style={formDisplay}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <h3>צור קשר</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="שם פרטי"
                  name="name"
                  id="contact-name"
                  onChange={this.handelChange}
                />
                <label
                  className="input-field-icon icon-user"
                  htmlFor="login-name"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="contact-email"
                  onChange={this.handelChange}
                />
                <label
                  className="input-field-icon icon-email"
                  htmlFor="login-email"
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="כתוב הודעה"
                  name="message"
                  id="contact-message"
                  rows="12"
                  onChange={this.handelChange}
                />
              </div>

              <button
                id="contact-send"
                className="btn btn-primary btn-lg btn-block"
                type="submit"
                onClick={this.handleSubmit}
              >
                שלח
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

let styles = {
  coverImg: {
    height: "495px"
  }
};
