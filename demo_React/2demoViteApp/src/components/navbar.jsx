import { React, useEffect } from "react";
import "./navbar.css";

const Navbar = ({ color }) => {
  useEffect(() => {
    alert("Color changed to " + color);
  }, [color]);
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>{color}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
