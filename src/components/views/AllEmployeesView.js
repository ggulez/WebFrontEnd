import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  const { allEmployees, deleteEmployee } = props;

  if (!allEmployees.length) {
    return (
      <div>
        <p>There are no employees.</p>
        <Link to="/newemployee">
          <button>Add New Employee</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
            <Link to={`/employee/${employee.id}`}>
              <h3>{name}</h3>
            </Link>
            <p style={{ fontWeight: 'bold' }}>{employee.department}</p>
            <button onClick={() => deleteEmployee(employee.id)}>X</button>
          </div>
        );
      })}
      <br />
      <Link to="/newemployee">
        <button>Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default AllEmployeesView;
