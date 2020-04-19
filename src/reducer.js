import {REFRESH_TREE_DATA, RESET_TREE_DATA} from "./actions";

export default function reducer(state = {data: null}, action) {
    switch (action.type) {
        case RESET_TREE_DATA:
            return {
                data: null
            };
        case REFRESH_TREE_DATA:
            return {
                data: action.payload
            };
        default:
            return state;
    }
}
