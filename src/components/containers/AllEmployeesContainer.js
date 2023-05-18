import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEmployeesThunk, deleteEmployeeThunk } from "../../store/thunks";
import { AllEmployeesView } from "../views";

function AllEmployeesContainer() {
  const allEmployees = useSelector((state) => state.allEmployees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEmployeesThunk());
  }, [dispatch]);

  const deleteEmployee = (employeeId) => {
    dispatch(deleteEmployeeThunk(employeeId));
  };

  return (
    <AllEmployeesView
      allEmployees={allEmployees}
      deleteEmployee={deleteEmployee}
    />
  );
}

export default AllEmployeesContainer;
