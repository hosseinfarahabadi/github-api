import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <i className="fab fa-github text-light display-6 me-2 ms-2"></i>
          <div className="navbar-brand">GitHub</div>
        </div>
      </nav>
    </div>
  );
};
