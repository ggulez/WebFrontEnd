import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewEmployeeView from '../views/NewEmployeeView';
import { addEmployeeThunk } from '../../store/thunks';

const NewEmployeeContainer = () => {
  const dispatch = useDispatch();

  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    department: '',
  });
  const [redirect, setRedirect] = useState(false);
  const [redirectId, setRedirectId] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (employee.firstname === '' || employee.lastname === '') {
      setError('Firstname and Lastname fields are required');
      return;
    }

    try {
      const newEmployee = await dispatch(addEmployeeThunk(employee));
      setRedirect(true);
      setRedirectId(newEmployee.id);
      setError('');
    } catch (err) {
      setError('An error occurred while creating the employee');
    }
  };

  if (redirect) {
    return <Redirect to={`/employee/${redirectId}`} />;
  }

  return (
    <NewEmployeeView
      employee={employee}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default NewEmployeeContainer;
