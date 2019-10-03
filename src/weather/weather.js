import React, {Component} from 'react'
import './weather.css'
export default class Weather extends Component{
    render() {
        return(
            <div className='weather_info'>
                {this.props.city &&
                    <div className='weather_key'>
                        <p><img src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/></p>
                <p>Location: {this.props.name}, {this.props.country}</p>
                <p>Temperature: {this.props.temp}&deg;C</p>
                    <p>Wind: {this.props.wind}m/s</p>
                    <p>Sunrise: {this.props.sunrise}</p>
                    <p>Sunset: {this.props.sunset}</p>
                    </div>
                }

            </div>
        )
    }
}
