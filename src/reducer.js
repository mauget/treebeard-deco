import getScenarios from "./getScenarios";
import {REFRESH_TREE_DATA, RESET_TREE_DATA} from "./actions";

export const initialState = {
    data: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RESET_TREE_DATA:
            return {
                data: null
            };
        case REFRESH_TREE_DATA:
            return {
                data: getScenarios()
            };
        default:
            return state;
    }
}
