import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { MdOutlinePayment } from "react-icons/md";
import "./Status.css";
import { BsClock, BsClockFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { FiAlignLeft } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
function TodoContent() {
    const [todoData,setTodoData]=useState([
        {
            icon:<MdOutlinePayment size={20} className="icon-bg"
            style={{ marginLeft: "5px", marginTop: "5px" }}/>,
            title:'Run Payroll',
            timing:'May 4 at 6:00 pm'
        },
        {
            icon:<BsClock size={20} className="icon-bg"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          />,
            title:'Review time off request',
            timing:'May 4 at 6:00 pm'
        },
        {
            icon:<FaRegFileAlt size={20}className="icon-bg"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          />,
            title:'Sign board resolution',
            timing:'May 4 at 6:00 pm'
        },
        {
            icon:<BiCalendar size={20} className="icon-bg"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          />,
            title:'Finish onboarding Tony',
            timing:'May 4 at 6:00 pm'
        }
    ])
  return (
    <>
      <div className="m-3 fw-bolder pt-4">
        <div>Your To-Do List</div>
            {todoData.map((item,index)=>(
                        <div className="d-flex ps-3 pe-3 pt-3" key={index}>

                <div>
                {item.icon}
              </div>
              <div className="ps-3">
                <div className="todo-head">{item.title}</div>
                <span
                  style={{
                    fontSize: ".7rem",
                    fontWeight: "400",
                    marginTop: "-20px",
                  }}
                >
                 {item.timing}
                </span>
              </div>
              </div>
            ))}
          
        </div>
        {/* <div className="d-flex ps-3 pe-3 pt-3">
          <div>
            <MdOutlinePayment
              size={20}
              className="icon-bg"
              style={{ marginLeft: "5px", marginTop: "5px" }}
            />
          </div>
          <div className="ps-3">
            <div>Run Payroll</div>
            <span
              style={{
                fontSize: ".7rem",
                fontWeight: "400",
                marginTop: "-20px",
              }}
            >
              May 4 at 6:00 pm
            </span>
          </div>
        </div>

        <div className="d-flex ps-3 pe-3 pt-3">
          <div>
            <MdOutlinePayment
              size={20}
              className="icon-bg"
              style={{ marginLeft: "5px", marginTop: "5px" }}
            />
          </div>
          <div className="ps-3">
            <div>Run Payroll</div>
            <span
              style={{
                fontSize: ".7rem",
                fontWeight: "400",
                marginTop: "-20px",
              }}
            >
              May 4 at 6:00 pm
            </span>
          </div>
        </div>

        <div className="d-flex ps-3 pe-3 pt-3">
          <div>
            <MdOutlinePayment
              size={20}
              className="icon-bg"
              style={{ marginLeft: "5px", marginTop: "5px" }}
            />
          </div>
          <div className="ps-3">
            <div>Run Payroll</div>
            <span
              style={{
                fontSize: ".7rem",
                fontWeight: "400",
                marginTop: "-20px",
              }}
            >
              May 4 at 6:00 pm
            </span>
          </div>
        </div> */}

      {/* </div> */}
    </>
  );
}

export default TodoContent;
