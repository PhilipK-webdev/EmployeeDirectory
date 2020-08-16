import React, { useState } from 'react';
import './App.css';
import Employee from './component/Employee/Employee';


function App() {

  const [name, setName] = useState({ name: '' });

  const modifyName = (e) => {
    console.log(e.target.value)
    setName({ name: e.target.value });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron rounded-0">
          <h2 className="text-center mb-3">Welcome</h2>
          {/* <form className="form-group" >
            <input className="form-group ml-3" type="text" placeholder="Enter Name" onChange={modifyName} />
            <button className="btn btn-primary ml-2 rounded-0" type="submit" name={name}>Filter By Name</button>
          </form> */}

          <Employee bool={true} />

        </div>
      </div>
    </div>
  );
}

export default App;
