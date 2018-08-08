import { SQUARE_ARRAY_CHANGE } from "../constants";

const initalState = {
    squares: Array(9).fill(null),
    playerTurn: {
        name: "Nome teste",
        symbol: "X"
    }
};

export const boardState = (state = initalState, action) => {

    switch (action.type) {
        case SQUARE_ARRAY_CHANGE:
            let squares = state.squares.slice();
            squares[action.value.index] = state.playerTurn.symbol;

            return {...state, squares};

        default:
            return state;
    }
};