import React, { Component } from 'react';
import WeatherList from './WeatherList';
import Loader from './Loader';
import './App.css';



class App extends Component {

  state = {
      loading: false,
      name: "",
      dataCity: []
  };

  onChangeInputCity = (e) => {
    this.setState({name: e.target.value});
  };

  getDataCity = () => {
    this.setState({loading: true});

    fetch('http://api.openweathermap.org/data/2.5/weather?q='
        + this.state.name +
        '&appid=8e3145fe3bc2e2e42c29a6c323b46d41&units=metric')
        .then((response) => response.json())
        .then((response) =>
        {

          const data = this.state.dataCity.concat([{name: this.state.name, temp: response.main.temp,
              id: response.id, url: response.weather[0].icon}]);
          this.setState({dataCity: data, loading: false});

        });

  };

  cleaner = () => {
      this.setState({dataCity: [], name: "", loading: false});
  };

  deleteCity = (id) => {
      const newData = this.state.dataCity.filter(data => data.id !== id);
      this.setState({dataCity: newData});
  };



  render() {

    if ((this.state.temp === null) && (this.state.loading)) return Loader;

     return (
          <div className="App">
              <div className="Input">
                  <input className="InputCityName" onChange={this.onChangeInputCity} placeholder="Введите название города"
                         value={this.state.name} />

                  <input className="GetCity" type="Button"
                         value="Send" onClick={this.getDataCity} />


                  <input className="Cleaner" type="Button" onClick={this.cleaner}
                         value="Delete" />
              </div>
              <WeatherList data={this.state.dataCity} deleteCity={this.deleteCity} />
          </div>
      );
  }


}

export default App;