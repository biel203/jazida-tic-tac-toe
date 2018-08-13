import {
    HAS_WINNER,
    HAS_DRAW,
    CHANGE_PLAYER_NAME,
    START_GAME,
    SQUARE_ARRAY_CHANGE,
    PLAYER_ONE,
    PLAYER_TWO, RESET_GAME
} from "../constants";

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
    playerTurn: "",
    winner: {},
    draw: false,
    gameHasStarted: false
};

export const gameState = (state = initalState, action) => {

    switch (action.type) {
        case HAS_WINNER:

            let winner = null;
            let players = null;

            Object.keys(state.players).map((key, index) => {
                if (state.players[key].symbol === action.value) {
                    players = Object.assign({}, state.players);
                    players[key].score += 1;
                    winner = Object.assign({}, players[key]);
                }
            });

            return {
                ...state,
                winner,
                players
            };

        case HAS_DRAW:
            return {
                ...state,
                draw: true
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
            return {
                ...state,
                gameHasStarted: true,
                playerTurn: PLAYER_ONE
            };

        case RESET_GAME:
            return {
                ...state,
                playerTurn: PLAYER_ONE,
                winner: initalState.winner,
                draw: false
            };

        case SQUARE_ARRAY_CHANGE:
            let statePlayerTurn = Object.assign({}, state.playerTurn);
            Object.keys(state.players).map((key, index) => {
                if (state.playerTurn !== key) {
                    statePlayerTurn = key;
                }
            });

            return {...state, playerTurn: statePlayerTurn};

        default:
            return state;
    }
};