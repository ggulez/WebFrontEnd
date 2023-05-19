import * as actionTypes from "../actions/actionTypes";

// REDUCER
const allEmployees = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_EMPLOYEES:
      return action.payload;
    case actionTypes.ADD_EMPLOYEE:
      return [...state, action.payload];
    case actionTypes.DELETE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.payload);
    case actionTypes.EDIT_EMPLOYEE:
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
    default:
      return state;
  }
};

export default allEmployees;
