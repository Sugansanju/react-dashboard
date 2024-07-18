import React from "react";
import logo from "../../assets/profile.png";
import { Image } from "react-bootstrap";
import { BsFillBellFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import './Status.css'
function Icons() {
  return (
    <>
      <div className="d-md-flex justify-content-around d-none">
        <span className="fs-3 me-3 pt-2 icon-wrapper">
          <FaCalendarAlt />
        </span>
        <span className="fs-3 me-3 pt-2  icon-wrapper">
          <BsFillBellFill />
          <span className="badge-clr"></span>
        </span>
        <span className="fs-3 me-3 pt-2  icon-wrapper">
          <MdMessage />
          <span className="badge-clr"></span>
        </span>
        <span className="pt-2">
          {" "}
          <Image src={logo} style={{borderRadius:'50px'}}></Image>
        </span>
      </div>
    </>
  );
}

export default Icons;
