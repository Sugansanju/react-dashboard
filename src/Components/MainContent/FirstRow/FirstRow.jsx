import React, { useEffect, useRef, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaWallet } from "react-icons/fa";
import { BsEyeFill, BsPieChartFill, BsThreeDotsVertical } from "react-icons/bs";
import "./FirstRow.css";
import { BiDollar, BiUserCheck } from "react-icons/bi";
import { DiDatabase } from "react-icons/di";
import { PiUserCheckFill } from "react-icons/pi";
import { GiBanknote, GiRupee } from "react-icons/gi";
function FirstRow() {
  const [details,setDetails]=useState([
    {
      id:1,
    icon:<FaWallet size={30}/>,
    count:'$123,457',
    content:'Your bank balance'
  },
  {
    id:2,
    icon:<BsPieChartFill size={30}/>,
    count:'$123.45',
    content:'Your bank balance'
  },
  {
    id:3,
    icon:<PiUserCheckFill size={30}/>,
    count:'7',
    content:'Employees working today'
  },
  {
    id:4,
    icon:<GiBanknote size={30}/>,
    count:'$2,567.00',
    content:`This week's card spending`
  },
])
const [openMenu, setOpenMenu] = useState(null);
const toggleSettingsMenu = (id) => {
  setOpenMenu(openMenu === id ? null : id);
};
const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Row>
        
        {details.map((item)=>(
           <Col md={3} sm={6} xs={12} className="mb-4" key={item.id}>

           <Card ref={cardRef}>
             <Card.Body>
               <Card.Title>
                 <div className="d-flex justify-content-between">
                   <div className="">
                    {item.icon}
                   </div>
                   <div className="ps-5">
                     <BsThreeDotsVertical
                      onClick={() => toggleSettingsMenu(item.id)}
                      style={{ cursor: "pointer" }}
                     />
                     {openMenu === item.id && (
                       <div className="floating-menu">
                         <ul class="list-group list-group-flush">
                           <li class="list-group-item"><BiDollar/> &nbsp; Make Payment</li>
                           <li class="list-group-item"><DiDatabase/>&nbsp; view balance details</li>
                           <li class="list-group-item"><BsEyeFill/> &nbsp; view account details</li>
                         </ul>
                       </div>
                     )}
                   </div>
                 </div>
               </Card.Title>
               <Card.Subtitle
                 className="pt-3 pb-3"
                 style={{ fontSize: "1rem", fontWeight: "700" }}
               >
                 {item.count}
               </Card.Subtitle>
               <Card.Text
                 className="subTitle"
                 style={{ fontSize: ".9rem", width: "100px" }}
               >
                 {item.content}
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
        ))}
       
        {/* <Col md={3} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <div className="d-flex ">
                  <div className="me-auto">
                    <FaWallet />
                  </div>
                  <div>
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </Card.Title>
              <Card.Subtitle
                className="pt-3 pb-3"
                style={{ fontSize: "1rem", fontWeight: "800" }}
              >
                346
              </Card.Subtitle>
              <Card.Text
                className="subTitle"
                style={{ fontSize: ".8rem", width: "100px" }}
              >
                Your bank balance
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <div className="d-flex ">
                  <div className="me-auto">
                    <FaWallet />
                  </div>
                  <div>
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </Card.Title>
              <Card.Subtitle
                className="pt-3 pb-3 "
                style={{ fontSize: "1rem", fontWeight: "800" }}
              >
                7
              </Card.Subtitle>
              <Card.Text
                className="subTitle"
                style={{ fontSize: ".8rem", width: "100px" }}
              >
                Employees working today
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <div className="d-flex ">
                  <div className="me-auto">
                    <FaWallet />
                  </div>
                  <div>
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </Card.Title>
              <Card.Subtitle
                className="pt-3 pb-3"
                style={{ fontSize: "1rem", fontWeight: "800" }}
              >
                $3,234.00
              </Card.Subtitle>
              <Card.Text
                className="subTitle"
                style={{ fontSize: ".8rem", width: "100px" }}
              >
                This week's card spending
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </>
  );
}

export default FirstRow;
