import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = ({quiz}) => {
    console.log(quiz);
  const data = useLoaderData();
//   const quizzes = data.data;
//   console.log(quizzes);
console.log(data);
  return (
    <div>
      <h3>Quiz section {}</h3>
      
    </div>
  );
};

export default Quiz;
