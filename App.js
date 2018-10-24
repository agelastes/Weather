import React, { Component } from 'react';
import './App.css';
import Dashboard from "./dashboard";

let i = 0;

const data = {
    name: "Rim",
    temp: "0.0",
    clear: true
};

let array = [];
array.push(data);

class App extends Component {

    constructor(){
        super();
        this.state = {
            name: array[i].name,
            temp : array[i].temp,
            clear: array[i].clear
        };
        
        this.Request = this.Request.bind(this);
    }

    Name(e) {
        array[i].name = e.target.value;
    }

    Clear() {
        array[i].clear = true;
    }

    Request() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + array[i].name + '&appid=8e3145fe3bc2e2e42c29a6c323b46d41&units=metric').
        then((Response) => Response.json()).
        then((Response) =>
        {
            array.push({name: Response.name, temp: Response.main.temp, clear: false});
            i = i + 1;
             this.setState({name: array[i].name, temp: array[i].temp});
             console.log(array[i]);
        })
         //this.setState({clear: false});
    }

  render() {
    return (
      <div className="App">
          <div>
              <input onChange={this.Name} />
                  <button onClick={this.Request}>Add</button>
                  <button onClick={this.Clear}>Clear</button>
          </div>
              <Dashboard data = {array} i = {i}/>
      </div>
    );
  }
}

export default App;
