import * as actionCreators from './actions/actionCreators';
const axios = require('axios');

// PATH (should be where your server is running)
let path = "http://localhost:5001/api";

// THUNKS

// All employees
export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees`);
    dispatch(actionCreators.fetchAllEmployees(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Single employee
export const fetchEmployeeThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees/${id}`);
    dispatch(actionCreators.fetchEmployee(res.data));
  } catch (err) {
    console.error(err);
  }
};

// All tasks
export const fetchAllTasksThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/tasks`);
    dispatch(actionCreators.fetchAllTasks(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Add task
export const addTaskThunk = (task) => async (dispatch) => {
  try {
    let res = await axios.post(`${path}/tasks`, task);
    dispatch(actionCreators.addTask(res.data));
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// Delete task
export const deleteTaskThunk = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`${path}/tasks/${taskId}`);
    // Delete successful, so change state with dispatch
    dispatch(actionCreators.deleteTask(taskId));
  } catch (err) {
    console.error(err);
  }
};

// Edit task
export const editTaskThunk = (task) => async (dispatch) => {
  try {
    let res = await axios.put(`${path}/tasks/${task.id}`, task);
    // res.data is the updated tasks object
    dispatch(actionCreators.editTask(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Single task
export const fetchTaskThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/tasks/${id}`);
    dispatch(actionCreators.fetchTask(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Delete employee
export const deleteEmployeeThunk = (employeeId) => async (dispatch) => {
  try {
    await axios.delete(`${path}/employees/${employeeId}`);
    // Delete successful, so change state with dispatch
    dispatch(actionCreators.deleteEmployee(employeeId));
  } catch (err) {
    console.error(err);
  }
};

// Add employee
export const addEmployeeThunk = (employee) => async (dispatch) => {
  try {
    let res = await axios.post(`${path}/employees`, employee);
    dispatch(actionCreators.addEmployee(res.data));
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// Edit employee
export const editEmployeeThunk = (employee) => async (dispatch) => {
  try {
    let res = await axios.put(`${path}/employees/${employee.id}`, employee);
    // res.data is the updated employee object
    dispatch(actionCreators.editEmployee(res.data));
  } catch (err) {
    console.error(err);
  }
};
