import {combineReducers} from "redux";
import companyReducer from './companyReducer';


export const form1rootReducers = combineReducers({
    form1companyReducer:companyReducer,
})