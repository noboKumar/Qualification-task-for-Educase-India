import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to={"/signin"}></Navigate>;
  }
  return children;
};

export default PrivateRouter;
