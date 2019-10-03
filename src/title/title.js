import React, {Component} from 'react';
import './title.css'

export default class Title extends Component{
    render (){
        return(
            <div>
                <h1 className='title_title'>Weather</h1>
                <p className='title_subtitle'>Find out temperature and more...</p>
            </div>
                )
                }
}