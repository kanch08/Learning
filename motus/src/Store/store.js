import { createStore } from 'redux';
import {rootReducers} from '../Reducers/reducer';

export const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);