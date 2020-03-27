/**
 * This module helps maintain tree header visual selection. We want no more than one header selected at a time.
 * The header class registers its selection reset state function here. Whenever a header decides to select,
 * it calls resetAllSelections() exposed through NodeContext via useContext hook.
 *
 * Expected client modules are CustomHeader and TreeView
 */
import React from "react";

const headerDictionary = [];

export function registerHeaderDeselect(header) {
    headerDictionary.push(header);
}

export function resetHeaderRegistry() {
    headerDictionary.length = 0;
}

function resetAllSelections() {
    headerDictionary.forEach((fnResetSelection) => fnResetSelection());
}

export const NodeContext = React.createContext({resetAllSelections});
