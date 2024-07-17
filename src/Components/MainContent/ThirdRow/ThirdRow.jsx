import React from "react";
import { Card, Col, Row, Table,Image } from "react-bootstrap";
import logo from '../../../assets/profile.png'
import './ThirdRow.css'
function ThirdRow() {
  let data = [
    {
      image:logo,
      name: "Suganya",
      status: "Meeting Scheduled",
      time: "12:24PM",
    },
    {
      image: logo,
      name: "Mathavan",
      status: "Updated on marketing campaign",
      time: "8:24AM",
    },
    {
      image:logo,
      name: "Saranya",
      status: "Updated on marketing campaign",
      time: "1:24PM",
    },
  ];
  return (
    <>
      <Card className="p-2">
        <div className="table-responsive p-1">
          <div className="p-2 heading-2">Recent emails</div>
          <Table className="nowrap-table no-border">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td> <Image src={row.image} style={{borderRadius:'30px',height:'35px'}}></Image></td>
                  <td className="table-data"> {row.name}</td>
                  <td className="table-data"> {row.status}</td>
                  <td className="table-data"> {row.time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  );
}

export default ThirdRow;
