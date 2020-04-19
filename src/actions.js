/*
 * action types
 */
import getScenarios from "./getScenarios";

export const RESET_TREE_DATA = 'RESET_TREE_DATA';
export const REFRESH_TREE_DATA = 'REFRESH_TREE_DATA';

/*
 * action creators
 */
export function resetTreeData() {
    return {type: RESET_TREE_DATA};
}

export function refreshTreeData(payload) {
    console.log(`refreshTreeData payload`, payload);
    return {type: REFRESH_TREE_DATA, payload};
}

export function refreshTreeDataAsync() {
    return (dispatch) => {
        setTimeout(() => {
            // Can invoke sync or async actions with `dispatch`
            const payload = getScenarios();
            dispatch(refreshTreeData(payload));
        }, 1000);
    };
}
