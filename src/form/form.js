import React, {Component} from 'react';
import './form.css'

export default class Form extends Component{
    render (){
        return(
            <div className='form'>
                <form onSubmit={this.props.takeWeather}>
                <input type='Text' name='city' placeholder='Enter city'/>
                <button>Get Weather</button>
            </form>
                </div>

        )
    }

};
