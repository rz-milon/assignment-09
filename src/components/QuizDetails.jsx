import React from 'react';
import { RadioGroup } from '@headlessui/react'
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const QuizDetails = ({quiz}) => {
  const {id, options, question, correctAnswer} = quiz;




  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-2xl p-12 bg-white rounded shadow-xl">
        <RadioGroup>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
              <h3 className='text-lg font-semibold'>{question}</h3>
              <div className='flex justify-end'>
                <EyeSlashIcon className='w-6 h-6'>{correctAnswer}</EyeSlashIcon>
            </div>
              <div className=" grid grid-cols-1 gap-3">
              {
                    options.map(option =><p className='bg-gray-200 px-9 py-3 rounded font-semibold text-gray-800 hover:bg-orange-600 hover:text-white duration-700'><input className='' type="radio" name="radio" id="" /><span className='px-12'>{option}</span></p>)
                }
                
              </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

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
  )
}



export default QuizDetails;