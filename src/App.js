import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Repositories from "./components/Repositories";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/repositories" element={<Repositories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
