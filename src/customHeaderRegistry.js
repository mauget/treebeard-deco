/**
 * This module helps maintain tree header visual selection. We want no more than one header selected at a time.
 * A header component registers its selection reset state function here. Whenever a header needs to select,
 * it first calls resetAllSelections() exposed through NodeContext via useContext hook.
 *
 * Expected client modules are CustomHeader and TreeView
 */
import React from "react";

const headerDictionary = [];

export function registerHeaderDeselect(fnResetSelection) {
    headerDictionary.push(fnResetSelection);
}

export function resetHeaderRegistry() {
    headerDictionary.length = 0;
}

function resetAllSelections() {
    headerDictionary.forEach((fnResetSelection) => fnResetSelection());
}

export const NodeContext = React.createContext({resetAllSelections});
