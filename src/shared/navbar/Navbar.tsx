import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-white p-4 bg-gray-900 w-full border-gray-400 border-solid absolute bottom-0">
      <nav className="flex justify-around items-center">
        <NavLink to="/dashboard">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <NavLink to="/dashboard">
          <FontAwesomeIcon icon={faBolt} />
        </NavLink>
        <NavLink to="/settings">
          <FontAwesomeIcon icon={faGear} />
        </NavLink>
      </nav>
    </div>
  );
}
