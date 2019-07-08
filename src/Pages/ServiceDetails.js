import React, { Component } from "react";
import courseService from "../services/course-service";

export default class ServiceDetails extends Component {
  constructor() {
    super();
    this.state = { course: {} };
  }

  componentDidMount() {
    var self = this;
    const id = this.props.match.params.id;
    const course = courseService.getCourseById(id).then(res => {
      self.setState({ course: res });
    });
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <section className="course-details slide-in-fwd-center">
        <h1>{this.state.course.title}</h1>
        <div className="course-details-wrapper flex space-between">
          <div className="course-img" >
            <img src={this.state.course.img}   alt="course"/>
          </div>
          <div className="left-text-box" >
            {/* <p>{this.state.course.content}</p> */}
            <h3>למי מיועד הקורס?</h3>
            <p>{this.state.course.ages}</p>
            <h3>תדירות</h3>
            <p >{this.state.course.duration}<br/>
            {this.state.course.taste}<br/>
            {this.state.course.personalDuration}
            </p>
            <h3>מה יקבלו מהקורס?</h3>
            <p>{this.state.course.purpose} </p>
           
          </div>
        </div>
        {/* {/* <h2>למי מיועד הקורס</h2>
        <h2>מה יקבלו מהקורס</h2> */}
        <h2>תוכן הקורס</h2> 
          <p>{this.state.course.content}</p>
        
      </section>
    );
  }
}
