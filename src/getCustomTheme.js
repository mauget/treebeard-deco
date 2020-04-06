// noinspection ES6CheckImport
import {theme as defaultTheme} from 'react-treebeard';

// Get override copy of default TreeBeard theme for caller
export default function getCustomTheme() {
    const _theme = Object.assign({}, defaultTheme);
    _theme.tree.base = {
        ..._theme.tree.base,
        color: "white",
        backgroundColor: "#282c34"
    };
    _theme.tree.node.activeLink = {
        backgroundColor: "#c0c0c0",
        color: "black",
        border: "2px solid blue",
        paddingLeft: "2px",
        paddingRight: "2px",
    };
    return _theme;
}
