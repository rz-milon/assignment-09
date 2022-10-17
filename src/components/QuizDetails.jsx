import React from "react";
import { RadioGroup } from "@headlessui/react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const QuizDetails = ({ quiz }) => {

  const { id, options, question, correctAnswer } = quiz;
  // console.log(correctAnswer);

  const selectOption = (e) =>{
    const selectItem = e.target.innerText;
    // console.log("Click", e.target.innerText);
    
    if(selectItem === correctAnswer){
      return toast.success('Correct Answer!', { autoClose: 500, position: toast.POSITION.TOP_CENTER })
    }else{
      return toast.warning('Incorrect Answer', { autoClose: 500, position: toast.POSITION.TOP_CENTER })
    }
  }

  const viewAnswer = () =>{
    const answer = correctAnswer;
    // console.log(answer);
    if(answer === true ){
      
      
    }
  }

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-2xl p-12 bg-white rounded shadow-xl">
        <RadioGroup>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
            <div className="flex justify-end p-2" onClick={viewAnswer}>
              <EyeIcon className="w-8 h-8 text-blue-500 opacity-50 hover:opacity-100" >
              <p className="text-lg text-blue-800 font-semibold text-right hidden">{correctAnswer}</p></EyeIcon>
            </div>
            <div className=" grid grid-cols-1 gap-3">
              {options.map((option) => <div key={option.id} className=" flex bg-gray-200 px-9 py-4 rounded font-semibold align-middle text-gray-800 hover:bg-cyan-300 hover:text-white duration-700">
              <div className="inline-flex space-x-4" >
              <input  className="w-6 h-6 hidden" type="radio" name="option" id="" />
                <label className="text-lg" onClick={selectOption}>{option}</label>
              </div>
              </div>)}
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};


export default QuizDetails;
