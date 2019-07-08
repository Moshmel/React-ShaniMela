import React from "react";
import { NavLink } from "react-router-dom";

const ServicePreview = props => {
  const { course } = props;
  var path = `/workshops/${course.id}`;
  return (
    <NavLink to={path} className="Nav_link">
      <section className="card-container" style={styles.card}>
        <div style={styles.imgConatiner}>
          <img
            src={course.img}
            style={styles.img}
            className="card-service-preview"
            alt="course preview"
          />
        </div>
        <h3 style={styles.h3}>{course.title}</h3>
      </section>
    </NavLink>
  );
};
var styles = {
  h3:{
    marginTop:6
  },
  card: {
    width: 250,
    height: 280,
    boxShadow: "0 1px 5px 1px rgba(0,0,0,.15)",
    margin:15
  },
  imgConatiner: {
    width: "100%",
    height: 220
  },
  img: {
    borderRadius: 4,
    objectFit: "cover"
  }
};

export default ServicePreview;
