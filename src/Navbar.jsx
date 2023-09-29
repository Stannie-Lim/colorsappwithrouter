import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/purple">purple</Link>
      <Link to="/violet">violet</Link>
      <Link to="/orange">orange</Link>
      <Link to="/brown">brown</Link>
      <Link to="/yellow">yellow</Link>
      <Link to="/magenta">magenta</Link>
      <Link to="/aqua">aqua</Link>
    </div>
  );
};

export default Navbar;
