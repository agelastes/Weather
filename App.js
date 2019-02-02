import React, { Component } from 'react';
import './App.css';
import WeatherList from './WeatherList';




class App extends Component {


  state = {
      loading: false,
      name: null,
      temp: null,
      id: null,
      dataCity: []
  };

  inputRead = (e) => {
    this.setState({name: e.target.value});
  };

  requestCity = () => {
    this.setState({loading: true});

    fetch('http://api.openweathermap.org/data/2.5/weather?q='
        + this.state.name +
        '&appid=8e3145fe3bc2e2e42c29a6c323b46d41&units=metric')
        .then((response) => response.json())
        .then((response) =>
        {

          const data = this.state.data.concat({name: this.state.name, temp: response.main.temp, id: response.id});
          this.setState({dataCity: data, temp: response.main.temp, loading: false, id: response.id});

        });

  };

  clearDashboard = () => {

      this.setState({dataCity: [], name: null, temp: null, loading: false});
      this.refs.inputCity.value = "";

  };



  render() {
    if ((this.temp === null) && (this.state.loading))
    {
      return null;
    }
    else
    {
      return (
          <div className="App">
            <input onChange={this.inputRead} placeholder = "Введите название города" ref = "inputCity">

            </input>
            <input type = "Button" value="отправить" onClick={this.requestCity}>
            </input>

            <input type = "Button" value="очистить"  onClick={this.clearDashboard}>
            </input>

            <WeatherList data = {this.state.dataCity}/>

          </div>
      );
    }
  }


}

export default App;
