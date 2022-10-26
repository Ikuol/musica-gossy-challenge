import { SET_MUSIC } from "../type";
import { SET_POPULAR } from "../type";
import { SET_PLAYLIST } from "../type";

// const {combineReducers} = require('redux');

const initialState={
    music : [],
    popular:[],
    playlist: [],
}

const reducers = (state= initialState, action) =>{
    console.log(action)
    switch (action.type) {
        case SET_MUSIC:{
            return {...state, music: action.payload.slice()};
        }
        case SET_POPULAR:{
            return{...state, popular: action.payload.slice()};
        }
        case SET_PLAYLIST:{
            return{...state, playlist: action.payload.slice()};
        }
        default:
            return state;
    }
} 

export default reducers;