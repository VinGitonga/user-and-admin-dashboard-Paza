import React from 'react'
import Header from '../components/Header'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Feedback = () => {

  
const data = [
  {
    name: "Water",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Security",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Education",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Sports",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Entertainment",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Health",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Agriculture",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='' title='Feedback'/>

      <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 3,
        left: 2,
        bottom: 5
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
        stroke="#EF1724"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#85C441" />
    </LineChart>
      
    </div>
  )
}

export default Feedback