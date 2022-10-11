import React from "react";
import { useLoaderData } from "react-router-dom";

const Topics = () => {
  const data = useLoaderData();
  const topics = data.data;
  console.log(topics);

  return (
    <div className="sm:mx-3 md:mx-11 lg:mx-28">
      <h2 className="text-4xl font-semibold text-slate-700 my-12">Quiz Topics</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-7 my-14">
        {topics.map(topic => (
          <div className="rounded sm:mx-auto sm:w-3/4 md:w-full lg:w-full shadow hover:shadow-xl bg-gray-200" key={topic.id}>
            <div className="bg-amber-200 rounded-t">
                <img className="w-full h-4/5" src={topic.logo} alt="" />
            </div>
            <hr className="text-white font-bold order-4"/>
            <h3 className="text-2xl text-blue-700 font-bold my-3">{topic.name}</h3>
            <button className="bg-amber-600 text-white font-semibold w-full py-2 px-10 rounded hover:bg-blue-500 duration-700">
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
