import React, { Component } from 'react';
import './App.css';

const Weather = (props) => {

        return (
            <div className='weather'>
                <h3>{props.data.name}</h3>
                <div>{props.data.temp} ℃</div>
                <img src='http://openweathermap.org/img/w/10d.png'/>
                <div className='weather__delete'>Delete</div>
            </div>
        );
}

export default Weather;
