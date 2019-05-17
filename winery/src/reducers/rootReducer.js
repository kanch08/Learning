import {combineReducers} from 'redux';
import data from '../components/data';

const initState = data;

const reducer = (state = initState ,action) => {
    switch(action.type){
        case "onChange":{
            return {state}
        }
        default : {
            return state;
        }
    }
}


export const rootReducer = combineReducers({
    reducer,
})