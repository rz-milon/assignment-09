import React from 'react';
import Statistics from './Statistics';

const ChartDetails = (topics) => {
    const chartData = topics.topics;
    console.log(chartData);
    return (
        <div>
            {
                chartData.map(data=><Statistics 
                   data= {data} 
                ></Statistics>)
            }
        </div>
    );
};

export default ChartDetails;