import {HAS_WINNER, CHANGE_PLAYER_NAME, START_GAME} from "../constants";

const initalState = {
    players: {
        playerOne: {
            name: "",
            symbol: "X",
            score: 0
        },
        playerTwo: {
            name: "",
            symbol: "O",
            score: 0
        }
    },
    playerTurn: {},
    winner: null,
    gameHasStarted: false
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

        case CHANGE_PLAYER_NAME:
            let statePlayer = Object.assign({}, state.players[action.value.player]);
            statePlayer.name = action.value.name;

            return {
                ...state,
                players: {
                    ...state.players,
                    [action.value.player]: statePlayer
                },
            };
        case START_GAME:
            debugger;
            let playerTurn = Object.assign(state.playerTurn, action.value);

            return {
                ...state,
                playerTurn
            };



        default:
            return state;
    }
};