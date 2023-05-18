import React from 'react';
import { Link } from 'react-router-dom';

const TaskView = (props) => {
  const { task } = props;

  return (
    <div>
      <h1>{task.description}</h1>
      {task.employee ? (
        <Link to={`/employee/${task.employee.id}`}>
          <h3>{task.employee.firstname + ' ' + task.employee.lastname}</h3>
        </Link>
      ) : (
        <h3>staff</h3>
      )}

      <form>
        <label>Description:</label>
        <input type="text" value={task.description} disabled />
        <br />

        <label>Priority:</label>
        <input type="text" value={task.priority} disabled />
        <br />

        <label>Is Complete:</label>
        <input type="checkbox" checked={task.isComplete} disabled />
        <br />

        <label>Employee ID:</label>
        <input type="text" value={task.employeeId} disabled />
        <br />
      </form>
      <br />
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br />
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );
};

export default TaskView;
