// noinspection ES6CheckImport
import { theme as defaultTheme } from 'react-treebeard';

// Get override copy of default TreeBeard theme for caller
export default function customTheme() {
    const theme = { ...defaultTheme };

    theme.tree.base = {
        ...theme.tree.base,
        color: 'white',
        backgroundColor: '#282c34',
    };

    // Highlight active link
    theme.tree.node.activeLink = {
        ...theme.tree.node.activeLink,
        // background: '#dddddd',
        // color: 'blue',
        // border: '2px solid blue',
        // paddingLeft: '4px',
        // paddingRight: '4px',
        // fontWeight: 'bold',
        // borderRadius: '6px'
    };

    // Nullify rendering Treebeard's rotating svg twisty
    theme.tree.node.toggle = {
        ...theme.tree.node.toggle,
        height: 0,
        width: 0,
    };

    theme.tree.node.subtree = {
        ...theme.tree.node.subtree,
        paddingLeft: '2.0rem'
    }
    return theme;
}
