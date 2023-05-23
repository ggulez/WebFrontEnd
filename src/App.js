import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import {
  HomePageContainer,
  EmployeeContainer,
  TaskContainer,
  AllEmployeesContainer,
  AllTasksContainer,
  NewTaskContainer,
  EditTaskContainer,
  NewEmployeeContainer,
  EditEmployeeContainer
} from './components/containers';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/employees" component={AllEmployeesContainer} />
          <Route exact path="/employee/:id" component={EmployeeContainer} />
          <Route exact path="/tasks" component={AllTasksContainer} />
          <Route exact path="/newtask" component={NewTaskContainer} />
          <Route exact path="/task/:id" component={TaskContainer} />
          <Route exact path="/edittask/:id" component={EditTaskContainer} />
          <Route exact path="/newemployee" component={NewEmployeeContainer} />
          <Route exact path="/editemployee/:id" component={EditEmployeeContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
