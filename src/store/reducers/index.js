import { combineReducers } from "redux";
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import loaderReducer from './loaderReducer';

const reducers = combineReducers({
    user: userReducer,
    alert: alertReducer,
    loader: loaderReducer
});

export default reducers;