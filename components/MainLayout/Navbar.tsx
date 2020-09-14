import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { Store } from "../../contextStore";
const navFontSize = {
  fontSize: "18px",
};
const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const logout = () => {
    window.localStorage.removeItem("cp-a");
    router.push("/auth/login");
  };
  useEffect(() => {
    let lStorage: any = window.localStorage.getItem("cp-a");
    lStorage = JSON.parse(lStorage);
    if (lStorage) {
      dispatch({ type: "UPDATE_USERNAME", payload: lStorage.username });
      dispatch({ type: "SET_EMAIL", payload: lStorage.emailaddress });
      dispatch({ type: "SET_IMAGE", payload: lStorage.image });
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div
      className="hor-header header d-flex navbar-collapse"
      style={{ height: "80px !important" }}
    >
      <div className="container">
        <div className="d-flex">
          <a className="animated-arrow hor-toggle horizontal-navtoggle">
            <span />
          </a>
          <a className="header-brand" href="#">
            <img
              src="/assets/images/Logo.png"
              className="header-brand-img main-logo"
              alt="logo"
              style={{ marginLeft: "-1em" }}
            />
          </a>

          <div>
            <div className="btn-group mt-2 mb-2">
              <button
                type="button"
                className="btn btn-default menu-button"
                data-toggle="dropdown"
              >
                <i className="fe fe-menu fa-lg" style={{ fontSize: "20px" }} />
              </button>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="#">Market</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Members</a>
                </li>
              </ul>
            </div>
          </div>

          {/* logo*/}
          <div className="d-none dropdown d-md-flex header-settings ml-auto">
            <a className="nav-link">
              <span className="lay-outstyle mt-1">Market</span>
            </a>

            <a className="nav-link">
              <span className="lay-outstyle mt-1">Partnership</span>
            </a>
            <a className="nav-link">
              <span className="lay-outstyle mt-1">Forum</span>
            </a>
            <Link href="/blog">
              <a
                className="nav-link"
                style={{ color: router.pathname == "/blog" ? "" : "black" }}
              >
                <span className="lay-outstyle mt-1">Blog</span>
              </a>
            </Link>
            <Link href="/memberlist">
              <a
                className="nav-link"
                style={{
                  color: router.pathname == "/memberlist" ? "" : "black",
                }}
              >
                <span className="lay-outstyle mt-1">Members</span>
              </a>
            </Link>
          </div>
          <div className="d-flex order-lg-2 ml-auto header-right">
            {/*  <a href="#" className="nav-link icon full-screen-link">
              <i className="fa fa-bell-o" />
            </a> */}
            {/*Navbar */}
            <div className="dropdown header-profile">
              <a
                className="nav-link pr-0 leading-none d-flex pt-1"
                data-toggle="dropdown"
              >
                <span
                  className="avatar avatar-md brround cover-image"
                  data-image-src="/images/blank_avatar.jpeg"
                  style={{
                    background: `url(${state.image}) center center`,
                  }}
                ></span>
                <div className="ml-3">
                  <span style={{ color: "#000000" }}>
                    {state.username.length <= 0 ? "No Name" : state.username}
                    <i className="fe fe-chevron-down ml-1" />
                  </span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <Link href="/profile">
                  <a className="dropdown-item">
                    <i className="dropdown-icon fe fe-user" />
                    View Profile
                  </a>
                </Link>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-edit" />
                  Account Setting
                </a>
                <a className="dropdown-item" href="#" onClick={logout}>
                  <i className="dropdown-icon fe fe-power" /> Log Out
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a className="dropdown-item" href="profile">
                    <i className="dropdown-icon fe fe-user" />
                    View Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fe fe-edit" />
                    Account Setting
                  </a>
                  <a className="dropdown-item" href="auth/login">
                    <i className="dropdown-icon fe fe-power" /> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
