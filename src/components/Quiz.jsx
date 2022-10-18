import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";

const Quiz = () => {
  const data = useLoaderData();
  const quizzes = data.data.questions;

  return (
    <div className="">
      
    <div className="bg-gray-200 py-24">
      {quizzes.map((quiz) =><QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      )}
    </div>
    </div>
  );
};

export default Quiz;
