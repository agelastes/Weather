import React from 'react';



const WeatherList = (props) => {

    const data = props.data;
    const weatherList = data.map((data) =>
        <div>
            <h2>{data.name}</h2>
            <h2>{data.temp}</h2>
        </div>

    );

    return (

            <div>{weatherList}</div>

    );

};

export default WeatherList;
