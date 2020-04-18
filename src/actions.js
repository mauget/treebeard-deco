/*
 * action types
 */
export const RESET_TREE_DATA = 'RESET_TREE_DATA';
export const REFRESH_TREE_DATA = 'REFRESH_TREE_DATA';

/*
 * action creators
 */
export function resetTreeData() {
    return {type: RESET_TREE_DATA};
}

export function refreshTreeData() {
    return {type: REFRESH_TREE_DATA};
}
