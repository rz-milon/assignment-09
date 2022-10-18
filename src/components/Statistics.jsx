import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  const topics = data.data;

  return (

      <div className="mx-auto w-3/6 pt-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={topics}  margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={50}>
            <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 10 }} />

            <YAxis />
            <Tooltip></Tooltip>
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Statistics;
