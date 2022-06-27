import React, { Fragment, useState, useEffect, Profiler } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/Landing";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();
      console.log(parseRes);

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  console.log(isAuthenticated);

  return (
    <Fragment>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Landing setAuth={setAuth} />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login setAuth={setAuth} />
                )
              }
            />

            <Route
              path="/register"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Register setAuth={setAuth} />
                )
              }
            />

            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard setAuth={setAuth} />
                ) : (
                  <Login setAuth={setAuth} />
                )
              }
            />
            {/* <Route
              path="/todos/:id"
              element={
                isAuthenticated ? <Profile /> : <Login setAuth={setAuth} />
              }
            />
            <Route path="*" element={<Notfound />} /> */}

            <Route
              path="/users/:username"
              element={
                isAuthenticated ? <Profile /> : <Login setAuth={setAuth} />
              }
            />
            <Route path="*" element={<Notfound />} />

            <Route
              path="/three"
              element={
                isAuthenticated ? <Navigate to="/dashboard" /> : <Home />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
