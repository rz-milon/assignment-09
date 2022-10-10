import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Home = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data;
    console.log(topics);
    return (
        <div className='bg-gray-700'>
            <h3>Home: {topics.length}</h3>
            {
                topics.map(topic=><Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)

            }
        </div>
    );
};

export default Home;