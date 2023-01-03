import React, { useContext } from "react";
import { authContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(authContext);

  if (user) {
    return children;
  } else {
    return <Navigate to={"/profile/signup"} />;
  }
};

export default RequireAuth;
