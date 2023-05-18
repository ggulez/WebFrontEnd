import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchEmployeeThunk,
  fetchAllTasksThunk,
  editTaskThunk
} from "../../store/thunks";

import { EmployeeView } from "../views";

class EmployeeContainer extends Component {
  componentDidMount() {
    // Getting employee ID from URL
    const { fetchEmployee, fetchTasks, match } = this.props;
    fetchEmployee(match.params.id);
    fetchTasks();
  }

  render() {
    const { employee, allTasks, editTask } = this.props;

    return (
      <EmployeeView
        employee={employee}
        allTasks={allTasks}
        editTask={editTask}
      />
    );
  }
}

// Map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks,
  };
};

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    fetchTasks: () => dispatch(fetchAllTasksThunk()),
    editTask: (task) => dispatch(editTaskThunk(task)),
  };
};

export default connect(mapState, mapDispatch)(EmployeeContainer);
