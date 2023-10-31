import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';



export type CounterDataType = {
  count: number,
  max: number,
  start: number
}



export const App = () => {

  const [state, setState] = useState({ count: 0, max: 0, start: 0 })



  return (
    <div className="App">
      <Counter
        state={state}
        setState={setState}
      />
      <Settings
        state={state}
        setState={setState}
      />
    </div>
  );
}


