import {HAS_WINNER} from "../constants";

const initalState = {
    players: {
        playerOne: {
            name: "Player 1",
            symbol: "X",
            score: 0
        },
        playerTwo: {
            name: "Player 2",
            symbol: "O",
            score: 0
        }
    },

    playerTurn: null,

    winner: null
};

export const gameState = (state = initalState, action) => {

    switch (action.type) {
        case HAS_WINNER:
            let player = Object.assign({}, state.players[action.player]);
            player.score += 1;

            return {
                ...state,
                players: {
                    ...state.players,
                    [action.player]: player
                },
            };

        default:
            return state;
    }
};