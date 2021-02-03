import { combineReducers } from 'redux';
import holidayReducer from './holidayReducer';
import dateReducer from './dateReducer';

export default combineReducers({
    holidays: holidayReducer,
    dates: dateReducer
});

