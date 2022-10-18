import { RadioGroup } from "@headlessui/react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";




const QuizDetails = ({quiz}) => {
  const { id, options, question, correctAnswer } = quiz;

  const selectOption = (e) =>{
    const selectItem = e.target.innerText;
    // console.log("Click", e.target.innerText);
    
    if(selectItem === correctAnswer){
      return toast.success('Correct Answer!', { autoClose: 500, position: toast.POSITION.TOP_CENTER })
    }else{
      return toast.warning('Incorrect Answer', { autoClose: 500, position: toast.POSITION.TOP_CENTER })
    }
  }

  // const viewAnswer = (e) =>{
  //   const view= e.target.innerText;
  //   view.className='block'
    
  //   console.log(view);

    
  // }

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-2xl p-12 bg-white rounded shadow-xl">
        <RadioGroup>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 ">{question}</h3>
            <div className="flex justify-end p-2 cursor-pointer">
              <p className="text-lg text-blue-800 font-semibold text-right mr-4 hidden" >{correctAnswer} </p>
              <EyeIcon className="w-8 h-8 text-blue-500 opacity-50 hover:opacity-100" onClick={''}></EyeIcon>
            </div>
            <div className=" grid grid-cols-1 gap-3">
              {options.map((option) => <div key={option.name} className=" flex bg-gray-100 px-9 py-4 rounded font-semibold align-middle text-gray-800 hover:bg-cyan-200 hover:text-gray-600 duration-700">
              <>
                <label className="inline-flex items-center space-x-10 cursor-pointer" >
                  <input  className="w-5 h-5" type="radio" name="option" id="" />
                  <span className="text-lg" onClick={selectOption}>{option}</span>
                </label>
              </>
              </div>)}
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};


export default QuizDetails;
