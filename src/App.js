import React, { useState, useEffect } from 'react';
import './App.css';
import jsonData from './client.json'
import Employee from './component/Employee/Employee';
import Form from './component/Form/Form';

function App() {

  const [name, setName] = useState({ name: '' });
  const [employee, setEmployee] = useState([]);
  const [allEmployees, setALlEmployees] = useState([]);

  const modifyName = (e) => {
    setName({ name: e.target.value });
    let filteredEmp = [];
    for (let index = 0; index < allEmployees.length; index++) {

      if (allEmployees[index].first.toLowerCase().startsWith(e.target.value.toLowerCase())) {
        filteredEmp.push(allEmployees[index])
      }
    }
    setEmployee(filteredEmp);
  }

  useEffect(() => {
    tableData();
  }, [])

  const tableData = () => {
    let arrayAll;
    arrayAll = jsonData.results.map((element) => {
      return { first: element.name.first, last: element.name.last, email: element.email, gender: element.gender };
    }).slice(0, 100);
    setEmployee(arrayAll);
    setALlEmployees(arrayAll)
  }
  const submitName = (e) => {
    e.preventDefault();

    allEmployees.sort(function (a, b) {
      if (a.first < b.first) { return -1; }
      if (a.first > b.first) { return 1; }
      return 0;
    })
    const newTemp = [...allEmployees];
    setEmployee(newTemp);

  }
  const showAll = (e) => {
    e.preventDefault();
    if (allEmployees.length > 0) {
      setEmployee(allEmployees);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron rounded-0">
          <h1 className="text-center mb-3 text-monospace bg-success text-white">Welcome</h1>
          <Form modifyName={modifyName} submitName={submitName} showAll={showAll} />
          <Employee employee={employee} />
        </div>
      </div>
    </div>
  );
}

export default App;
