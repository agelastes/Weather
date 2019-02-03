import React, { Component } from 'react';
import './App.css';
import WeatherList from './WeatherList';



class App extends Component {


  state = {
      loading: false,
      name: "",
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

          const data = this.state.dataCity.concat([{name: this.state.name, temp: response.main.temp,
              id: response.id, road: response.weather[0].icon}]);
          this.setState({dataCity: data, temp: response.main.temp, loading: false, id: response.id});

        });

  };

  clearDashboard = () => {

      this.setState({dataCity: [], name: "", temp: null, loading: false});

  };

  deleteCity = (id) => {

      const oldData = [...this.state.dataCity];
      const newData = oldData.filter(data => data.id !== id);
      this.setState({dataCity: newData});

  };



  render() {

    if ((this.temp === null) && (this.state.loading)) return null;

    else return (
          <div className="App">
              <div className="Input">
                  <input className="InputCityName" onChange={this.inputRead} placeholder="Введите название города"
                         value={this.state.name}>

                  </input>
                  <input className="GetCity" type="Button" value="Send" onClick={this.requestCity}>
                  </input>

                  <input className="Cleaner" type="Button" value="Delete" onClick={this.clearDashboard}>
                  </input>
              </div>


              <WeatherList data={this.state.dataCity} deleteItem={() => this.deleteCity()}/>

          </div>
      );
  }


}

export default App;
