import { HAS_WINNER, CHANGE_PLAYER_NAME } from "../constants";

export const scoreChange = value => ({type: HAS_WINNER, value});
export const changePlayerName = value => ({type: CHANGE_PLAYER_NAME, value});
