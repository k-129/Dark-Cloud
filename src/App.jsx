/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LoginForm from "./Pages/LoginPage";
import SignUpPage from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

import IsPrivate from "./Components/IsPrivate";
import IsAnon from "./Components/IsAnon";

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
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginForm />
            </IsAnon>
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
