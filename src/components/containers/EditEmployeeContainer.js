import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk } from '../../store/thunks';

class EditEmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      department: '',
      redirect: false,
      redirectId: null,
      error: '',
    };
  }

  componentDidMount() {
    const { fetchEmployee, employee } = this.props;
    fetchEmployee(employee.id);
    this.setState({
      firstname: employee.firstname,
      lastname: employee.lastname,
      department: employee.department,
    });
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { employee, editEmployee } = this.props;
  
    if (this.state.firstname === '' || this.state.lastname === '') {
      this.setState({ error: 'Error: first name and last name cannot be empty' });
      return;
    }
  
    const updatedEmployee = {
      id: employee.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      department: this.state.department,
    };
  
    await editEmployee(updatedEmployee);
  
    this.setState({
      redirect: true,
      redirectId: employee.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    const { employee } = this.props;
    const { redirect, redirectId, error } = this.state;

    if (redirect) {
      return <Redirect to={`/employee/${redirectId}`} />;
    }

    return (
      <div>
        <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name:</label>
          <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name:</label>
          <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Department:</label>
          <input type="text" name="department" value={this.state.department} onChange={this.handleChange} />
          <br />

          <button type="submit">Submit</button>
        </form>

        {error !== '' && <p>{error}</p>}

        <div>
          <Link to={`/employee/${employee.id}`}>Back to Employee Details</Link>
        </div>
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditEmployeeContainer);
