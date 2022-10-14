import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const quizData = useLoaderData();
  const quizTopics = quizData.data;
  const data = [
    {
      name: quizTopics[0].name,
      total: quizTopics[0].total,
      pv: 2400,
      amt: 2400,
    },
    {
      name: quizTopics[1].name,
      total: quizTopics[1].total,
      pv: 2400,
      amt: 2400,
    },
    {
      name: quizTopics[2].name,
      total: quizTopics[2].total,
      pv: 2400,
      amt: 2400,
    },
    {
      name: quizTopics[3].name,
      total: quizTopics[3].total,
      pv: 2400,
      amt: 2400,
    },
  ];
  return (
    <div className="container mx-auto bg-slate-100 my-10 rounded-2xl shadow-2xl pt-10 pb-5">
      <h1 className="text-center font-bold text-2xl mb-5">Statistics</h1>
      <div className="flex justify-center">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
