import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";
import Statistics from "./Statistics";

const Quiz = () => {
  const data = useLoaderData();
  const quizzes = data.data.questions;
  const [chart, setChart] = useState([]);
  return (
    <>
    <div className="bg-gray-200">
      <h2 className="py-24">Quiz </h2>
      {quizzes.map((quiz) => (
        <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
    <div>
      <Statistics chart={chart} setChart={setChart} quizzes={quizzes}></Statistics>
    </div>
    </>
  );
};

export default Quiz;
