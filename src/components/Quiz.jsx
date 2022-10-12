import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";

const Quiz = () => {
  const data = useLoaderData();
  const quizzes = data.data.questions;
  console.log(quizzes);

  return (
    <div className="bg-gray-200">
      <h2>Quiz {quizzes.length}</h2>
      {quizzes.map((quiz) => (
        <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
  );
};

export default Quiz;
