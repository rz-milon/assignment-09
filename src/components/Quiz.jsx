import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";
import bgImg from '../assets/quiz-background.jpg'

const Quiz = () => {
  const data = useLoaderData();
  const quizzes = data.data.questions;

  return (
    <div className="relative">
      
    <div className="bg-gray-200">
    <img src={bgImg} alt="" className="bg-no-repeat bg-cover  bg-fixed" />
      {quizzes.map((quiz) => (
        <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
    </div>
  );
};

export default Quiz;
