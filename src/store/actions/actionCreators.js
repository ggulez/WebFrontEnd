import * as at from './actionTypes';

// ACTION CREATORS
// All employees
export const fetchAllEmployees = (employees) => ({
  type: at.FETCH_ALL_EMPLOYEES,
  payload: employees,
});

// Single employee
export const fetchEmployee = (employee) => ({
  type: at.FETCH_EMPLOYEE,
  payload: employee,
});

// All tasks
export const fetchAllTasks = (tasks) => ({
  type: at.FETCH_ALL_TASKS,
  payload: tasks,
});

export const addTask = (task) => ({
  type: at.ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: at.DELETE_TASK,
  payload: taskId,
});

export const editTask = (task) => ({
  type: at.EDIT_TASK,
  payload: task,
});

// Single task
export const fetchTask = (task) => ({
  type: at.FETCH_TASK,
  payload: task,
});

// Add employee
export const addEmployee = (employee) => ({
  type: at.ADD_EMPLOYEE,
  payload: employee,
});

// Delete employee
export const deleteEmployee = (employeeId) => ({
  type: at.DELETE_EMPLOYEE,
  payload: employeeId,
});

export const editEmployee = (employee) => ({
  type: at.EDIT_EMPLOYEE,
  payload: employee,
});
