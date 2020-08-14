import React from 'react';
import './App.css';
import Form from './component/Form/Form';
import Card from './component/Card/Card';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">
          Welcome
        </h1>
        <Form />
        <Card />
      </div>
    </div>
  );
}

export default App;
