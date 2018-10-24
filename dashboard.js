import React, { Component } from 'react';
import './App.css';
import Weather from './weather';


   const Dashboard = (props) => {

       let item = props.data[props.i];
       //const array = props.array;


       if (item.clear === false) {
           return (
               <Weather data={item}/>
           );
       }
       else {
           return (
               <div className='dashboard-placeholder'>
                   Dashboard is empty
               </div>
           );
       }
    };



export default Dashboard;
