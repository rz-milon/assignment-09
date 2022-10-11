import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const data = useLoaderData();
    const topics = data.data;
    console.log(topics);
    
    
    return (
        <div className='bg-black'>
            <h2 className='text-4xl'>Quiz topics:{topics.length}</h2>

            {
                topics.map(topic =><div className=''>
                    <img className='bg-slate-400 w-4 h-4' src={topic.logo} alt="" />
                    <h3>{topic.name}</h3>
                </div>
                )
            }
            
        </div>
    );
};

export default Topics;