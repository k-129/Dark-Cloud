/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LoginForm from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
