import React, { useState } from 'react';
import Button from './components/button';
import Display from './components/display'
import './App.css';

function App() {
  const time = new Date().toLocaleTimeString();

  const [counter, setCounter] = useState(5);
  const incrementHandler = (incValue) => {
    setCounter(counter + incValue);
  }

  return (
    <div className="App">
      <div className="buttons">
        <Button onClickFunction={incrementHandler} increment={1} />
        <Button onClickFunction={incrementHandler} increment={2} />
        <Button onClickFunction={incrementHandler} increment={3} />
      </div>
      <div>
        <Display message={counter} />
      </div>
      <hr />
      <div>
        <p>--------------------------------------------</p>
        <p>React HTML</p>
        <p>--------------------------------------------</p>
        <input/>
        <pre>{time}</pre>
      </div>
    </div>
  );
}

export default App;
