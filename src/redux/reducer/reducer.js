import { SET_MUSIC } from "../type";

// const {combineReducers} = require('redux');

const initialState={
    music : [],
}

const reducers = (state= initialState, action) =>{
    switch (action.type) {
        case SET_MUSIC:
            return {...state, music: action.payload.slice()};
        default:
            return state;
    }
} 

export default reducers;