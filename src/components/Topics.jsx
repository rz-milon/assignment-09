import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Topics = () => {
  const data = useLoaderData();
  const topics = data.data;

  return (
    <div className="sm:mx-3 md:mx-11 lg:mx-28">
      <h2 className="text-4xl font-semibold text-slate-700 my-24">
        Quiz Topics
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-7 my-14">
        {topics.map((topic) => (
          <div
            className="bg-gray-100 rounded sm:mx-auto sm:w-3/4 md:w-full lg:w-full shadow hover:shadow-xl"
            key={topic.id}
          >
            <div className=" ">
              <img className="w-full h-4/5 bg-gray-200 rounded-t" src={topic.logo} alt="" />
            </div>
            <h3 className="text-2xl text-blue-700 font-bold my-3">
              {topic.name}
            </h3>
            <Link to={`/quiz/${topic.id}`}>
              {" "}
              <button className="bg-amber-600 text-lg text-white font-semibold w-full  px-10 rounded hover:bg-blue-500 duration-700 flex justify-between items-center">
              <span className="tracking-wider">Start Quiz</span>
                 <ArrowLongRightIcon className="w-12 h-12"></ArrowLongRightIcon>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
