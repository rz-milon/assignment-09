import React from "react";
import { RadioGroup } from "@headlessui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const QuizDetails = ({ quiz }) => {
  const { id, options, question, correctAnswer } = quiz;

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-2xl p-12 bg-white rounded shadow-xl">
        <RadioGroup>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{question}</h3>
            <div className="flex justify-end p-2">
              <EyeIcon className="w-8 h-8 hidden"></EyeIcon>
              <EyeSlashIcon className="w-8 h-8">{correctAnswer}</EyeSlashIcon>
            </div>
            <div className=" grid grid-cols-1 gap-3">
              {options.map((option) => <div key={option.name} className=" flex bg-gray-200 px-9 py-4 rounded font-semibold align-middle text-gray-800 hover:bg-orange-500 hover:text-white duration-700">
              <div className="">
              <button className="mr-20" ><input className="w-6 h-6" type="radio" name="option" id="" /></button>
              </div>
                <div className="">
                  <p className="text-center ">{option}</p>
                </div>
              </div>)}
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default QuizDetails;
