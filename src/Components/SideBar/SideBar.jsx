import React from "react";
import { Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

import { MdDashboard } from "react-icons/md";
import { FaChartLine, FaUsers } from "react-icons/fa";
import {  CiSettings } from "react-icons/ci";
import { BiPowerOff } from "react-icons/bi";
import { FiFile } from "react-icons/fi";
function SideBar() {
  return (
    <>
      <div className=" m-3 d-none d-md-block  shadow  sidenav">
        <div className="sidenav">
          <div className="center-icons">
            <Nav.Item>
              <NavLink>
                <MdDashboard size={40} />
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink>
                <FaChartLine size={40} />
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink>
                <FaUsers size={40} />
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink>
                <FiFile size={40} />
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink>
                <CiSettings size={40} />
              </NavLink>
            </Nav.Item>
          </div>
          <Nav.Item>
              <NavLink>
                <BiPowerOff size={40} />
              </NavLink>
            </Nav.Item>
        </div>
      </div>
    </>
  );
}

export default SideBar;
