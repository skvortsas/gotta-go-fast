import {combineReducers} from 'redux';
import menReducer from './men';
import SelectedMan from './select-man';

const allReducers = combineReducers({
    men: menReducer,
    selected: SelectedMan
});

export default allReducers;