import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";

const Quiz = () => {
  const data = useLoaderData();
  const quizzes = data.data.questions;
  return (
    <div className="bg-gray-200">
      <h2 className="py-24">Quiz </h2>
      {quizzes.map((quiz) => (
        <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
  );
};

export default Quiz;
