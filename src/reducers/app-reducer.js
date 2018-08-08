import { LOADING_APP } from "../constants";

export const loadingApp = (state = false, action) => {

    switch (action.type) {
        case LOADING_APP:
            return action.bool;

        default:
            return state;
    }
}