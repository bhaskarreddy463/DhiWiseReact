import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  element: React.FC;
};

export const ProtectedRoute: React.FC<Props> = ({ element: Element }) => {
  const { pathname } = useLocation();
  const authkey = localStorage.getItem("authKey");

  if (
    !authkey &&
    ["/homepage", "/shoppingcart", "/productpage"].includes(pathname)
  ) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
