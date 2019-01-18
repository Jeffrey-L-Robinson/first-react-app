import React from 'react';

const Weather = props => (
        <div>
                {/*Passing in props from the App.js and displaying them if they have data using the and operator.*/}
                {props.city && props.country &&  <p>Location: {props.city}, {props.country}</p>}
                {props.temperature && <p>Temperature: {props.temperature}</p>}
                {props.humidity && <p>Hummidity: {props.humidity}</p>}
                {props.description && <p>Conditions: {props.description}</p>}
                {props.error && <p>{props.error}</p>}
            </div>
)

export default Weather;