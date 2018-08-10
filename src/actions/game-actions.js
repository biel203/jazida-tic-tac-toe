import { HAS_WINNER, HAS_DRAW, CHANGE_PLAYER_NAME, START_GAME, RESET_BOARD } from "../constants";

export const scoreChange = value => ({type: HAS_WINNER, value});
export const changePlayerName = value => ({type: CHANGE_PLAYER_NAME, value});
export const startGame = value => ({type: START_GAME, value});
export const hasAWinner = value => ({type: HAS_WINNER, value});
export const hasDraw = () => ({type: HAS_DRAW, value: {}});

