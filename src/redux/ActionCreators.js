import * as ActionTypes from './ActionTypes';

export const addZip = (zip) => ({
    type: ActionTypes.ADD_ZIP,
    payload: zip
});

export const fetchWeather = (data) => ({
    type: ActionTypes.FETCH_DATA,
    payload: data
})

export const fetchByZip = (zip) => (dispatch) => {
    dispatch(addZip(zip));
    return fetch('http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=' + zip.zipForm + ',us&appid=8a2a289636fdb0979036d6ef48afd81c')
        .then(response => { return response.json()})
        /*.then(data => {
           "The Current Weather is " + data.weather[0].main + ": " + data.weather[0].description + ". \nIt is " + data.main.temp + " degrees and feels like " + data.main.feels_like +".";
        })*/
        
        .then(data => dispatch(fetchWeather("The Current Weather is " + data.weather[0].main + ": " + data.weather[0].description + ". \nIt is " + data.main.temp + " degrees and feels like " + data.main.feels_like +".")))
        .then(data => console.log(data));
};