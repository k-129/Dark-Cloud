import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth.context";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  // if authentication is loading
  if (isLoading) return <p>Loading ... </p>;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    // if the user is logged in, allow to see the page.
    return children;
  }
}

export default IsPrivate;
