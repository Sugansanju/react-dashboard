import React from "react";
import { Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Feb 13",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb 14",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Feb 15",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Feb 16",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Feb 17",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Feb 18",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];
function ChartContent() {
  return (
    <Card className="p-2 mb-4">
      <div className="d-flex justify-content-between pb-2">
        <div className="heading-2">New clients</div>
        <div  className="heading-3">Last 7 days vs prior week</div>
      </div>
      <ResponsiveContainer width="100%" height={210}>
        <LineChart
          // width={640}
          // height={210}
          data={data}
          margin={{
            top: 5,
            right: 90,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default ChartContent;
