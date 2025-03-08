import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

{
  /* The use of anchor tags gets the page reloaded while moving to another page */
}
{
  /* To avoid it, react-router-dom is used for initializing the pages at root */
}
{
  /* and LINK is used instead of anchor tag */
}
const Navbar = () => {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>

            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <nav>
        <ul>
          <li>
            <NavLink className={(e)=> {return e.isActive?"red":""}} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> {return e.isActive?"red":""}} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> {return e.isActive?"red":""}} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;
