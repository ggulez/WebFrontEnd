import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk, fetchAllEmployeesThunk } from '../../store/thunks';

class EditTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      priority: "",
      isComplete: false,
      employeeId: null,
      redirect: false,
      redirectId: null,
      error: ""
    };
  }

  componentDidMount() {
    const { fetchTask, fetchEmployees, task } = this.props;
    fetchTask(task.id);
    fetchEmployees();
    this.setState({
      description: task.description,
      priority: task.priority,
      isComplete: task.isComplete,
      employeeId: task.employeeId
    });
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    if (name === "employeeId" && value !== "staff") {
      this.props.editTask({ id: this.props.task.id, employeeId: value });
    }
  };

  handleCheckboxChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { task, editTask } = this.props;

    if (this.state.description === "") {
      this.setState({ error: "Error: description cannot be empty" });
      return;
    }

    const updatedTask = {
      id: task.id,
      description: this.state.description,
      priority: this.state.priority,
      isComplete: this.state.isComplete,
      employeeId: this.state.employeeId
    };

    editTask(updatedTask);

    this.setState({
      redirect: true,
      redirectId: task.id
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    const { task, allEmployees } = this.props;
    const { redirect, redirectId, error } = this.state;

    if (redirect) {
      return <Redirect to={`/task/${redirectId}`} />;
    }

    return (
      <div>
        <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Priority:</label>
          <input
            type="text"
            name="priority"
            value={this.state.priority}
            onChange={this.handleChange}
          />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Is Complete:</label>
          <input
            type="checkbox"
            name="isComplete"
            checked={this.state.isComplete}
            onChange={this.handleCheckboxChange}
          />
          <br />

          <select name="employeeId" value={this.state.employeeId} onChange={this.handleChange}>
            <option value="staff">Staff</option>
            {allEmployees.map(employee => (
              <option value={employee.id} key={employee.id}>{employee.firstname}</option>
            ))}
          </select>

          <button type="submit">Submit</button>
        </form>

        {error !== "" && <p>{error}</p>}

        {task.employeeId !== null ? (
          <div>
            Current employee:
            <Link to={`/employee/${task.employeeId}`}>{task.employee.firstname}</Link>
            <button
              onClick={async () => {
                await this.props.editTask({ id: task.id, employeeId: null });
                this.props.fetchTask(task.id);
              }}
            >
              Unassign
            </button>
          </div>
        ) : (
          <div>No employee currently assigned</div>
        )}

        <div>
          Other employees:
          {allEmployees
            .filter(employee => employee.id !== task.employeeId)
            .map(employee => (
              <div key={employee.id}>
                <Link to={`/employee/${employee.id}`}>
                  <h4>{employee.firstname}</h4>
                </Link>
                <button
                  onClick={async () => {
                    await this.props.editTask({ id: task.id, employeeId: employee.id });
                    this.props.fetchTask(task.id);
                  }}
                >
                  Assign this employee
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
    allEmployees: state.allEmployees
  };
};

const mapDispatch = (dispatch) => {
  return {
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    fetchEmployees: () => dispatch(fetchAllEmployeesThunk())
  };
};

export default connect(mapState, mapDispatch)(EditTaskContainer);
