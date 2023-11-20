import React, { useState, useEffect } from 'react';
import ChartComponent from "./ChartComponent";

const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
];

const GraphTV = (props) => {
    const [data, setData] = useState(initialData);
    let value = 22.67

    useEffect(() => {
        let i = 1;
        const intervalId = setInterval(() => {
            const date = new Date('2019-01-01');
            date.setDate(date.getDate() + i);
            value = value + Math.random() * 2 - Math.random() * 2;
            setData(prevData => [...prevData, { time: date.toISOString().split('T')[0], value: parseFloat(value.toFixed(2)) }]);
            i++;
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ChartComponent {...props} data={data}></ChartComponent>
    );
};

export default GraphTV;