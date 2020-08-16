import React, { useState } from 'react';
import './App.css';
import jsonData from './client.json'
import Employee from './component/Employee/Employee';
import Form from './component/Form/Form';
function App() {

  const [name, setName] = useState({ name: '' });
  const [employee, setEmployee] = useState([]);
  const modifyName = (e) => {
    setName({ name: e.target.value });
  }
  let arrayAll;
  arrayAll = jsonData.results.map((element) => {
    return { first: element.name.first, last: element.name.last, email: element.email, gender: element.gender };
  }).slice(0, 100);

  const submitName = (e) => {
    e.preventDefault();
    e.target.value = "";
    let temp;
    temp = arrayAll.filter((element) => {
      return element.first === name.name;
    });
    if (name.name === "") {
      setEmployee(arrayAll);
    } else {
      setEmployee(temp);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron rounded-0">
          <h2 className="text-center mb-3">Welcome</h2>
          <Form modifyName={modifyName} submitName={submitName} />
          <Employee employee={employee} />
        </div>
      </div>
    </div>
  );
}

export default App;
