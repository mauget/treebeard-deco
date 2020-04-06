// noinspection ES6CheckImport
import {theme as defaultTheme} from 'react-treebeard';

// Get override copy of default TreeBeard theme for caller
export default function customTheme() {
    const _theme = {...defaultTheme};

    _theme.tree.base = {
        ..._theme.tree.base,
        color: "white",
        backgroundColor: "#282c34"
    };

    // Highlight active link
    _theme.tree.node.activeLink = {
        // backgroundColor: "#c0c0c0",
        // color: "black",
        backgroundColor: "white",
        color: "black",
        border: "4px solid blue",
        paddingLeft: "4px",
        paddingRight: "4px",
        fontWeight: "bold",
    };
    return _theme;
}
