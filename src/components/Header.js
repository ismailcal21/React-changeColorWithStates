import React, { useState } from "react";

const Header = (props) => {
  const [changeColor, setChangeColor] = useState(false);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${
          changeColor === true ? "success" : "danger"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.input}
                </a>
              </li>
              <li className="nav-item dropdown"></li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-5"
          id="basic-addon2"
          onClick={() => setChangeColor(!changeColor)}
        >
          ChangeColor
        </button>
      </nav>
    </div>
  );
};
export default Header;
