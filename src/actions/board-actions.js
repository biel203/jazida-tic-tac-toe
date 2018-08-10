import {RESET_GAME, SQUARE_ARRAY_CHANGE} from '../constants'

export const squareArrayChange = value => ({type: SQUARE_ARRAY_CHANGE, value});
export const resetGame = () => ({type: RESET_GAME, value: {}});

