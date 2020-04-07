import React from "react";
import { Link, withRouter } from "react-router-dom";

import PostList from "./Posts";

function Navbar() {
  const isLoading = false;
  const user =
    {
      name: "bogdan",
      id: 1,
      picture:
        "https://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1513770253/WEB_FREAK_50PX-01_yaqxg7.png",
    } & false;
  const isAuthenticated = false;
  return (
    <header>
      <div className="container-fluid position-relative no-side-padding">
        <span className="logo">
          {user && user.picture && <img src={user.picture} alt="My Avatar" />}
          {!user && (
            <img
              src={
                "https://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1513770253/WEB_FREAK_50PX-01_yaqxg7.png"
              }
              alt="My Avatar1"
            />
          )}
        </span>
        <div className="menu-nav-icon" data-nav-menu="#main-menu">
          <i className="ion-navicon" />
        </div>
        <ul className="main-menu visible-on-click" id="main-menu">
          <li>
            <Link className={"nav-link"} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            {!isLoading && !user && (
              <Link className={"btn btn-dark"} to={"/login/"}>
                Sign in
              </Link>
            )}
            {!isLoading && user && (
              <div>
                <label className="mr-2">{user.name}</label>
                <button
                  className="btn btn-dark"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Sign Out
                </button>
              </div>
            )}
          </li>

          {!user && (
            <li>
              <Link className={"nav-link"} to={"/signup/"}>
                Sign Up
              </Link>
            </li>
          )}
          <li>
            <Link className={"nav-link"} to={"/"}>
              {" "}
              Home{" "}
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link className={"nav-link"} to={"/create"}>
                {" "}
                Create{" "}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
export default withRouter(Navbar);
