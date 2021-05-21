import * as ActionTypes from './ActionTypes';

export const addZip = (weatherByZip) => ({
    type: ActionTypes.ADD_ZIP,
    payload: weatherByZip
});

export const fetchByZip = (zipForm) => (dispatch) => {
    return fetch('api.openweathermap.org/data/2.5/weather?zip=' + zipForm + ',us&appid=8a2a289636fdb0979036d6ef48afd81c')
        .then(response => response.json())
        /*.then(data => {
           "The Current Weather is " + data.weather[0].main + ": " + data.weather[0].description + ". \nIt is " + data.main.temp + " degrees and feels like " + data.main.feels_like +".";
        })*/
        .then(weatherData => dispatch(addZip(weatherData)));
};