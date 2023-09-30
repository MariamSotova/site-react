import React from "react";
import logo from "./img/donut.svg";

export const Main = () => {
  return (
    <div className="main-wrp">
      <img src={logo} className="main-logo" alt="logo" />
      <h1 className="name">Name</h1>
      <a
        className="main-link"
        href="https://github.com/MariamSotova"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className="main-link"
        href="https://www.linkedin.com/in/mariam-sotova-1467ba272/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
};
