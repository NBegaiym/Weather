import React, {Component} from 'react';
import './app.css'
import Form from "../form";
import Weather from "../weather";
import Error from "../error";
import Title from "../title";


export default class App extends Component {
    state = {
        icon: null,
        temp: null,
        name: null,
        country: null,
        city: null,
        wind: null,
        sunrise: null,
        sunset: null,
        error: false,
    };


    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        console.log(city);
        if (city) {
            const API_KEY = 'f7840ad20fbd1807a61426d6bbdc03cf';
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY + '&units=metric'}`)
                .then((res) => {
                    return res.json()
                })
                .then((body) => {
                    console.log(body);
                    this.setState({
                        icon: body.weather[0].icon,
                        name: body.name,
                        city: body.name,
                        country: body.sys.country,
                        temp: body.main.temp,
                        wind: body.wind.speed,
                        sunrise:body.sys.sunrise,
                        sunset:body.sys.sunset,
                    });
                })
                .catch(this.onError);

        }
    };

    onError = (err) => {
        this.setState({
            error: true
        })
    };

    sunrise() {
        let date = new Date(this.state.sunrise * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return hours + ':' + minutes
    }

    sunset() {
        let date = new Date(this.state.sunrise * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return hours + ':' + minutes
    }

    render() {
        const {error} = this.state;
        const content = error ? <Error/> : <Weather
            icon={this.state.icon}
            name={this.state.name}
            city={this.state.city}
            country={this.state.country}
            temp={this.state.temp}
            wind={this.state.wind}
            sunrise={this.sunrise()}
            sunset={this.sunset()}/>;
        return (
            <div>
                <div className="wrapper">
                    <div className="container">
                        <div className="main">
                            <div className="row">
                                <div className="col-md-5 title">
                                    <Title/>
                                </div>
                                <div className="col-md-7 form-container">
                                    <Form takeWeather={this.getWeather}/>
                                    {content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

