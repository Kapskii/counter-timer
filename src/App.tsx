import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



export type CounterDataType = {
  count: number,
  max: number,
  start: number
}



export const App = () => {

  const [state, setState] = useState({ count: 0, max: 0, start: 0 })



  return (

    <>
      <div className='header'>
        <ul>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <section className='wrapper'>
      <div className='blockWrapper'>
        <Routes>
          <Route path="/" element={<Counter state={state} setState={setState} />} />
          <Route path="/counter" element={<Counter state={state} setState={setState} /> } />
          <Route path="/settings" element={<Settings state={state} setState={setState} />} />
        </Routes>
      </div>
      </section>
    </>
  );
}


