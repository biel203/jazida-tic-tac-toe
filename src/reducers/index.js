import { combineReducers } from 'redux';

import { loadingApp } from "./app-reducer";

import { boardState } from "./board-reducer";

import { gameState } from "./game-reducer";

export default combineReducers({
    // APP REDUCER
    loadingApp,

    // BOARD REDUCER
    boardState,

    // GAME REDUCER
    gameState
})