import React, { useState } from "react";
import { ReactComponent as Menu } from "../../Assets/hamburger-menu-svgrepo-com.svg";
import logo from "../../Assets/logo.png";
import japan from "../../Assets/JP Flag.png";
import cash from "../../Assets/Icon.png";
import { Link } from "react-router-dom";

import "./about.styles.scss";
import "./menu.styles.scss";

export default function About() {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
  const modal = () => {
    return (
      <div className="modal">
        <div>
          <div className="modal-logo">
            <img src={logo} alt="-modal-logo" />
          </div>
          <div className="nav">
            <Link to="/signup">Sign up</Link>
            <Link to="/signup">Login</Link>
            <Link to="/publication">Publication</Link>
            <Link to="/">About domain</Link>
          </div>
        </div>
        <div className="dark-bar">
          <button onClick={toggleMenu}>X</button>
        </div>
      </div>
    );
  };

  return (
    <div className="about">
      <div className="menu-logo">
        {show ? modal() : <Menu className="menu" onClick={toggleMenu} />}
      </div>
      <div className="visiting">
        <p>You are visiting</p>
        <div className="mystino">
          {!show ? <img src={logo} alt="logo" className="logo" /> : ""}

          <p>mystino</p>
          <p>.jp</p>
          <div className="jpn-image">
            <img src={japan} alt="japan" />
          </div>

          <img src={cash} alt="cash" className="cash" />
        </div>
      </div>
      <div className="red-bar">
        <div className="red-bar-msg">
          On this <a href="/">domain</a> we play without real money!{" "}
          <a href="/about">About domain</a>{" "}
        </div>
      </div>
      <div className="about-domain">
        <h1>About domain</h1>
        <p className="explore">
          Let's explore the five most common domain extensions.
        </p>
        <div className="com">
          <div className="number">
            <span>1</span>
            <p className="extension">.com</p>
          </div>
          <p className="info">
            This is by far the most commonly used domain extension, 52% of all
            websites use.com
          </p>
        </div>
        <div className="jp">
          <div className="number">
            <span>2</span>
            <p className="extension">.jp</p>
          </div>
          <p className="info">Country code for Japan.</p>
        </div>
        <div className="net">
          <div className="number">
            <span>3</span>
            <p className="extension">.net</p>
          </div>
          <p className="info">Network Organizations.</p>
        </div>
        <div className="org">
          <div className="number">
            <span>4</span>
            <p className="extension">.org</p>
          </div>
          <p className="info">Organizations, generally charitable.</p>
        </div>
        <div className="bizz">
          <div className="number">
            <span>5</span>
            <p className="extension">.biz</p>
          </div>
          <p className="info">A business-focused domain.</p>
        </div>
        <div className="last">
          <div className="number">
            <span>6</span>
            <p className="extension">.info</p>
          </div>
          <p className="info">Product, service etc information.</p>
        </div>
      </div>
    </div>
  );
}
