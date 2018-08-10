import {HAS_WINNER, RESET_GAME, SQUARE_ARRAY_CHANGE} from "../constants";

const initalState = {
    squares: Array(9).fill(null)
};

export const boardState = (state = initalState, action) => {

    switch (action.type) {
        case SQUARE_ARRAY_CHANGE:
            let squares = state.squares.slice();

            squares[action.value.index] = action.value.symbol;

            return {...state, squares};

        case HAS_WINNER:
            return initalState;

        case RESET_GAME:
            return initalState;

        default:
            return state;
    }
};