import React, { Component } from "react";
import textService from "../services/text-service";
import MainService from "../components/MainService";
import Contact from "./Contact";
import { observer, inject } from "mobx-react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      review: {},
      reviewInterval: null,
      idx: 0
    };
  }

  componentDidMount() {
    const reviews = this.props.store.getReviews;
    this.setState(prevState => ({
      reviews: reviews,
      review: reviews[prevState.idx]
    }));
//change the presented review 
    var interval = setInterval(() => {
      if (!this.state.review) return;
      this.setState(prevState => ({ idx: prevState.idx + 1 }));
      let nextIdx = this.handleIdx(this.state.idx);
      let nextReview = this.state.reviews[nextIdx];
      this.setState({ review: nextReview });
    }, 5 * 1000);
    this.setState({ reviewInterval: interval });
  }
  componentWillUnmount() {
    clearInterval(this.state.reviewInterval);
  }
  handleIdx = idx => {
    let length = this.state.reviews.length;
    return idx % length;
  };
  render() {
    return (
      <section className="about slide-in-fwd-center">
        <div className="cover-img ">
          <div className="cover-img-wrapper">
            <h1>{this.state.review.txt}</h1>
            <h2>{this.state.review.from}</h2>
          </div>
        </div>
        <section className="wrapper-middle-section container">
          <h1>קצת עליי</h1>
          <p>{textService.aboutMe}</p>
          <h1>אני מאמין</h1>
          <p>{textService.myBelieve}</p>
        </section>

        <MainService />

        <section className="container contact-container-about">
          <Contact />
        </section>
      </section>
    );
  }
}

export default inject("store")(observer(HomePage));
