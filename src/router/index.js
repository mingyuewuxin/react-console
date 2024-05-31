import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from '../views/home'
import Login from '../views/login'
export default class router extends Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', boxSizing: 'border-box' }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/*" element={ <Home /> }></Route>
            <Route path="/login" element={ <Login /> }></Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
