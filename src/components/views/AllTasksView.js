import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h3>{description}</h3>
          </Link>
          <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        );
      }
      )}
      <br />
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
  );
};


export default AllTasksView;