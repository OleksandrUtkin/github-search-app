import {combineReducers} from 'redux';
import inputReducer from './inputValue'

const allReducers = combineReducers ({
    inputReducer: inputReducer
});

export default allReducers;