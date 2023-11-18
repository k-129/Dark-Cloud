/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LoginForm from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";

import IsPrivate from "./Components/IsPrivate";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <IsPrivate>
              <Dashboard />
            </IsPrivate>
          }
        />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
