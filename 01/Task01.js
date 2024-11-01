import React from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./../src/components/Home";
import Contact from "./../src/components/Contact";

const Task01 = () => {
  return (
    <>
      <h1>Task01</h1>
      <ul>
        <li>
          <Link to="/task01/Home">Home</Link>
        </li>
        <li>
          <Link to="/task01/Contact">Contact</Link>
        </li>
      </ul>

      <Route path="/task01/Home">
        <Home />
      </Route>
      <Route path="/task01/Contact">
        <Contact />
      </Route>
    </>
  );
};

export default Task01;

