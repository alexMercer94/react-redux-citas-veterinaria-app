import { combineReducers } from 'redux';
import datesReducer from './datesReducer';
import validatorReducer from './validatorReducer';

export default combineReducers({
    dates: datesReducer,
    error: validatorReducer
});
