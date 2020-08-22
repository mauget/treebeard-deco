import "@testing-library/jest-dom/extend-expect";
import {
    REFRESH_TREE_DATA,
    RESET_TREE_DATA,
    refreshTreeData,
    refreshTreeDataAsync,
    resetTreeData,
    thunkFetchScenarios,
} from "./actions";

describe("Actions tests", () => {
    test("resetTreeData", () => {
        expect(resetTreeData()).toEqual({ type: RESET_TREE_DATA });
    });

    test("resetTreeData", () => {
        const payload = { key: "value" };
        expect(refreshTreeData(payload)).toEqual({
            type: REFRESH_TREE_DATA,
            payload,
        });
    });

    test("thunkFetchScenarios", () => {
        const dispatch = jest.fn();

        thunkFetchScenarios(dispatch);
    });

    test("refreshTreeDataAsync", () => {
        refreshTreeDataAsync();
    });
});
