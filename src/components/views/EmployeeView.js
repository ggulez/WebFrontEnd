import React from "react";
import { Link } from "react-router-dom";

const EmployeeView = (props) => {
  const { employee, editTask, allTasks } = props;
  const assignedTasks = allTasks.filter((task) => task.employeeId === employee.id);
  const availableTasks = allTasks.filter((task) => task.employeeId !== employee.id);

  return (
    <div>
      <h1>{employee.firstname}</h1>
      <h3>{employee.department}</h3>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <div>
          <h3>Assigned tasks:</h3>
          {assignedTasks.length === 0 ? (
            <p>No assigned tasks for this employee.</p>
          ) : (
            assignedTasks.map((task) => (
              <div key={task.id}>
                <Link to={`/task/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button onClick={() => editTask({ id: task.id, employeeId: null })}>x</button>
              </div>
            ))
          )}
        </div>
        <div>
          <h3>Available tasks:</h3>
          {availableTasks.length === 0 ? (
            <p>No available tasks for this employee.</p>
          ) : (
            availableTasks.map((task) => (
              <div key={task.id}>
                <Link to={`/task/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button onClick={() => editTask({ id: task.id, employeeId: employee.id })}>+</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;
