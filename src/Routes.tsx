import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const Productpage = React.lazy(() => import("pages/Productpage"));
const Shoppingcart = React.lazy(() => import("pages/Shoppingcart"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Whatsinthis = React.lazy(() => import("pages/Whatsinthis"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/whatsinthis" element={<Whatsinthis />} />
          <Route
            path="/homepage"
            element={<ProtectedRoute element={Homepage} />}
          />
          <Route
            path="/shoppingcart"
            element={<ProtectedRoute element={Shoppingcart} />}
          />
          <Route
            path="/productpage"
            element={<ProtectedRoute element={Productpage} />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
