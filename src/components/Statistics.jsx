import React from "react";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = (data) => {
  const {name, total} = data;
  console.log(name);
  


// {
//   data.map(cd=><div>
//     <p>{cd.name}</p>
//     <p>{cd.total}</p>
//   </div>)
// }
//   const data = [
//     {
//       name: 'Page A',
//       marks: 4000,
//       quiz: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       marks: 3000,
//       quiz: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       marks: 2000,
//       quiz: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       marks: 2780,
//       quiz: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       marks: 1890,
//       quiz: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       marks: 2390,
//       quiz: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       marks: 3490,
//       quiz: 4300,
//       amt: 2100,
//     },
// ];
  
return (
    <div className="lg:my-60 lg:mx-20 style={{ width: '100%' }}">
        <div className="mx-auto w-3/4 h-96">
        <ResponsiveContainer width="100%" height={100} >
        <BarChart width={5} height={100} data='' > 
            <Bar type="monotone" dataKey="total" stroke="#8884d8" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
);
};

export default Statistics;
