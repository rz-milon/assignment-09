import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Topic = ({topic}) => {
    const {logo, name} = topic;
    console.log(topic);
    return (
        <div className='bg-gray-600'>
            <img className='w-full h-[20px] bg-black' src={logo} alt="" />
            <h3>{name}</h3>
            <button>Details <ArrowLongRightIcon></ArrowLongRightIcon> </button>
        </div>
    );
};

export default Topic;