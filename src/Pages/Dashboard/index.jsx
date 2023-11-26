import React, { useContext } from "react";
import { AuthContext } from "../../Context/auth.context";
export default function Dashboard() {
  const { logoutUsername, username } = useContext(AuthContext);

  return (
    <div>
      <p>Hello World</p>
      <form>
        <button type="submit" onClick={logoutUsername}>
          Logout
        </button>
      </form>
    </div>
  );
}
