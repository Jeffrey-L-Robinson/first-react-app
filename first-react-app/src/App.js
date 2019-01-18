// Importing react from the package.json package
import React from 'react';

import Titles from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

// API KEY from open weather api
const API_KEY = '41209d73a67d32b151b72bf43ce8f3fa';

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // Method for connecting to weather api
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    // Making a call to the weather api with the api url 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`);
    // Creating a variable to store the data that is retrieved from the api call called data
    const data = await api_call.json();
    // logging the data retrieved from the api call in the data variable to the console
    if(city && country) {

    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    });
    // 
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the value.'
      });
    }

  }

  render() {
    return (
      <div>
        <Titles/>
        {/*Rending the Form Component and passing in teh get weather method and calling the this.getweather method*/}
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature} 
                 city={this.state.city}
                 country={this.state.country}
                 humidity={this.state.humidity}
                 description={this.state.description}
                 error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
