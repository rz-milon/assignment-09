import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Quiz = () => {
  const data = useLoaderData()
  console.log(data);
 
  return (
    <>
    quiz 
    </>
  );
    
    
};

export default Quiz;
