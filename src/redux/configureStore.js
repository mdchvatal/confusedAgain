import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Reducer} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducer: Reducer,
            ...createForms({
                zipForm: ''
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}