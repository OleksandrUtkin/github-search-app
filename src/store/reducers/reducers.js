import {combineReducers} from 'redux';
import organizationReducer from "./organization";

const allReducers = combineReducers ({
    organizationReducer: organizationReducer
});

export default allReducers;