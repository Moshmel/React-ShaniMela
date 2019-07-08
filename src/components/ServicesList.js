import React, { Component } from "react";
import ServicePreview from "./ServicePreview";
import courseService from "../services/course-service";
import StackGrid from "react-stack-grid";

const courses = courseService.getCourses();
class ServicesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
    this.ListElement = null;
    this.MyTween = null;
  }
  componentDidMount() {

  }
  render() {
    return (
      <section className="container marginTop">
        <StackGrid columnWidth={280}>
          {courses.map((course, i) => (
            <ServicePreview course={course} key={i} />
          ))}
        </StackGrid>
      </section>
    );
  }
}
export default ServicesList;
