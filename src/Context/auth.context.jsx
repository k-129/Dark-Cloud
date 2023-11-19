/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logoutUsername = () => {
    removeToken();
    authenticateUsername();
  };

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const authenticateUsername = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/verify`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setIsLoading(false);
          setUsername(response.data);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUsername(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUsername(null);
    }
  };

  useEffect(() => {
    authenticateUsername();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        username,
        storeToken,
        authenticateUsername,
        logoutUsername,
        getToken,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
