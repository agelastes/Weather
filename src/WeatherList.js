import React, {Component} from 'react';
import './Weather.css';



const Weather = (props) => {

    const {data} = props;

  return(

      <div className='weather'>
          <h3>{data.name}</h3>
          <div>{data.temp} ℃</div>
          <img src={"http://openweathermap.org/img/w/" + props.data.url + ".png"} alt = "img"/>
          <button className='weather__delete' onClick={() => props.deleteCity(data.id)}>Delete</button>
      </div>

    );

};


class WeatherList extends Component {

    render() {

        const weatherList = this.props.data.map((data) =>

            <Weather data={data} deleteCity = {this.props.deleteCity} key={data.id} />

        );


        return (

            <div className = "WeatherList">{weatherList}</div>

        );
    }

}


export default WeatherList;