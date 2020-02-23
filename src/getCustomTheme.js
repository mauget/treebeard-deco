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
    return _theme;
}
