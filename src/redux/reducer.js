import * as ActionTypes from './ActionTypes';

export const Reducer = (state = {
    weatherData: null,
    zipForm: null
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ZIP:
            return {...state, weatherData: null, zipForm: action.payload}

        case ActionTypes.FETCH_DATA:
            return {...state, weatherData: action.payload, zipForm: null}
        
        default:
            return state;
    }
}

