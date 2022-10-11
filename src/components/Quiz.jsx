import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const data = useLoaderData();
  const quizzes = data.data;
  console.log(quizzes);
  return (
    <div>
      <h3>Quiz section {quizzes.length}</h3>
      
    </div>
  );
};

export default Quiz;
