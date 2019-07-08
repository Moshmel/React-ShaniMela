import React, { Component } from "react";
import StackGrid from "react-stack-grid";
export default class Gallery extends Component {
  render() {
    return (
      <section className=" container marginTop">
        <StackGrid columnWidth={200}>
          <div style={{ height: "150px" }} key="key1">
            <img
              src="https://res.cloudinary.com/explority/image/upload/c_scale,w_300/v1558444689/kelsey-chance-575541-unsplash_on43l6.jpg"
              alt="random gallery"
            />
          </div>
          <div style={{ height: "500px" }} key="key2">
            <img
              src="https://res.cloudinary.com/explority/image/upload/c_scale,w_400/v1558444705/tyler-nix-525389-unsplash_gbkgjo.jpg"
              alt="random gallery"
            />
          </div>
          <div style={{ height: "150px" }} key="key3">
            <img
              src="https://res.cloudinary.com/explority/image/upload/c_scale,w_300/v1558444701/delaney-dawson-130928-unsplash_gdsq0f.jpg"
              alt="random gallery"
            />
          </div>
          <div style={{ height: "500px" }} key="key4">
            <img
              src="https://res.cloudinary.com/explority/image/upload/c_scale,w_450/v1558444702/ryan-christodoulou-398758-unsplash_emslwa.jpg"
              alt="random image"
            />
          </div>
          <div style={{ height: "120px" }} key="key5">
            <img
              src="https://res.cloudinary.com/explority/image/upload/c_scale,w_300/v1558444709/chander-mohan-1454259-unsplash_rqmuu6.jpg"
              alt="random image"
            />
          </div>
          <div style={{ height: "200px" }} key="key6">
            <img
              src="https://res.cloudinary.com/explority/image/upload/c_scale,w_301/v1558444693/vishnu-r-nair-639172-unsplash_xvosvo.jpg"
              alt="random gallery"
            />
          </div>
          <div style={{ height: "180px" }} key="key7">
            <img
              src="https://res.cloudinary.com/explority/image/upload/c_scale,w_296/v1558444677/amy-shamblen-653250-unsplash_uvfgfl.jpg"
              alt="random gallery"
            />
          </div>
          <div style={{ height: "220px" }} key="key8">
            <img
              src="https://res.cloudinary.com/explority/image/upload/c_scale,w_300/v1558444712/pineapple-supply-co-279730-unsplash_kgqn9o.jpg"
              alt="random gallery"
            />
          </div>
        </StackGrid>
      </section>
    );
  }
}
