/*
 * action types
 */
import getDataObject from './getDataObject';

export const RESET_TREE_DATA = 'RESET_TREE_DATA';
export const REFRESH_TREE_DATA = 'REFRESH_TREE_DATA';

/*
 * Synchronous action creators
 */
export function resetTreeData() {
    return { type: RESET_TREE_DATA };
}

export function refreshTreeData(payload) {
    // eslint-disable-next-line no-console
    console.log('refreshTreeData payload', payload);
    return { type: REFRESH_TREE_DATA, payload };
}

// Exported for testing
export const thunkFetchParents = (dispatch) => {
    setTimeout(async () => {
        // A thunk can dispatch any kind of action vis its dispatch parameter
        const payload = await getDataObject();
        dispatch(refreshTreeData(payload));
    }, 0);
};

/*
 * Asynchronous action creators return a thunk that has a dispatch function as a parameter.
 * The thunk can do asynchronous processing such as network requests returning promises or
 * using async/await notation.
 */
export function refreshTreeDataAsync() {
    return (dispatch) => {
        thunkFetchParents(dispatch);
    };
}
