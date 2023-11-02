import React, { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./features/Counter/Counter";
import { Timer } from "./features/Timer/Timer";

export type CounterDataType = {
  count: number;
  max: number;
  start: number;
};

export const App = () => {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
        </ul>
      </div>
      <section className="wrapper">
        <div className="blockWrapper">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/timer" element={<Timer days={1} hours={0} minutes={0} seconds={1} />} />
          </Routes>
        </div>
      </section>
    </>
  );
};
