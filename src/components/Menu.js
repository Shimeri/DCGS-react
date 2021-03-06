import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => (
    <div className="Menu w-100 pa3 bg-dark-pink flex flex-row justify-between">
      <div>
        <NavLink className="link white pa3" to="/">DCGS</NavLink>
      </div>
      <div>
        <NavLink className="link white pa3" to="/options">Options</NavLink>
        <NavLink className="link white pa3" to="/wiki">Wiki</NavLink>
        <NavLink className="link white pa3" to="/about">About</NavLink>
      </div>
      <div>
        <a className="link white pa3" href="https://discordapp.com/invite/RKZCjKb">Join on Discord</a>
        <a className="link white pa3" href="https://ko-fi.com/DCGSIM">Support on Ko-fi</a>
      </div>
    </div>
)

export default Menu;
