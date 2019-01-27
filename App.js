import React, { Component } from 'react';
import './App.css';
import WeatherList from './WeatherList';




class App extends Component {

  data = [];

  state = {
    loading: false,
    name: null,
    id: 0,
    temp: null,

  };

   inputRead = (e) => {
     this.setState({name: e.target.value});
  };

   requestCity = () => {
     this.setState({loading: true});

     fetch('http://api.openweathermap.org/data/2.5/weather?q='
         + this.state.name +
         '&appid=8e3145fe3bc2e2e42c29a6c323b46d41&units=metric')
         .then((Response) => Response.json())
         .then((Response) =>
         {
           this.setState({temp: Response.main.temp});
           this.setState({loading: false});
           this.data.push({name: this.state.name, temp: this.state.temp});
           console.log(this.data[this.state.id]);
           this.setState({id: this.state.id + 1});
         });

   };

   clearDashboard = () => {

     this.data = [];
     this.refs.inputCity.value = "";
     this.setState({id: 0});
     this.setState({temp: null});
     this.setState({name: null});

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
            <input onChange={this.inputRead} ref = "inputCity">

            </input>
            <input type = "Button" value="отправить" onClick={this.requestCity}>
            </input>

            <input type = "Button" value="очистить"  onClick={this.clearDashboard}>
            </input>

            <WeatherList data = {this.data}/>

          </div>
      );
    }
  }


}

export default App;
