import cartreducer from "../Reducerpage/Reducer";

import cartCheckbox from '../Reducerpage/Checkbox.jsx';

import {combineReducers} from 'redux'

const rootReducer= combineReducers({
    cartreducer,cartCheckbox
});
export default rootReducer;