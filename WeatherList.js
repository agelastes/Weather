import React, {Component} from 'react';
import './Weather.css';




const Weather = (props) => {

    const {name, temp} = this.props;

  return(

      <div>
          <div className="WeatherList-item">
              <h2>{name}</h2>
              <h2>{temp + " °C"}</h2>
          </div>
          <div>
              <input type = "Button" value = 'удалить' onClick={props.deleteItem} />
          </div>
      </div>

    );

};


class WeatherList extends Component {

    constructor(props)

    {
        super(props);

        this.state = {
          cityDates: props.data
        };
    }


    deleteCity = (id) => {

        alert(this.state.data);

        this.setState({data: []});


    };


    render() {

        const weatherList = this.props.data.map((data) =>

            <Weather data={data} key={data.id} deleteItem = {() => this.deleteCity(data.id)} />

        );

        return (

            <div className = "WeatherList">{weatherList}</div>

        );
    }

}


export default WeatherList;
