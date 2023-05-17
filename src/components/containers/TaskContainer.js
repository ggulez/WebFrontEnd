import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseThunk } from "../../store/thunks";
import { CourseView } from "../views";

class CourseContainer extends Component {
  componentDidMount() {
    //getting task ID from url
    this.props.fetchTask(this.props.match.params.id);
  }

  render() {
    return (
      <TaskView 
        task={this.props.task}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(TaskContainer);