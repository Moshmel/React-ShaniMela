import React, { Component } from "react";
import { NavLink } from "react-router-dom";
function MainService() {

  return (
    <section className="main-service">
      <h1>השירותים שלי </h1>
      <div className="main-service-container">
        <NavLink className="Nav_link" to="/promparty">
          <div className="main-service-el">
            <img
              alt="courses"
              style={styles.img}
              src="https://res.cloudinary.com/explority/image/upload/c_scale,h_250/v1558541913/cap-celebrate-celebration-1205651_kgml36.jpg"
            />
            <h3 style={styles.h3}>מופעי סיום</h3>
          </div>
        </NavLink>

        <NavLink
          className="Nav_link"
          to="/workshops"
          activeClassName="activeRoute"
        >
          <div className="main-service-el" >
            <img
              alt="courses"
              style={styles.img}
              src="https://res.cloudinary.com/explority/image/upload/c_scale,h_250/v1558541972/boy-child-dry-leaves-36965_fbq0qi.jpg"
            />
            <h3 style={styles.h3}>סדנאות</h3>
          </div>
        </NavLink>
      </div>
    </section>
  );
}
var styles = {
  item: {},
  img: {
    width: 200,
    height: 150
  },
  h3: {
    fontSize: 22,
    margin: 10,
    marginRight: 32
  }
};
export default MainService;
