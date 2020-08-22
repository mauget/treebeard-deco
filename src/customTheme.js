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
        background: '#dddddd',
        color: 'blue',
        border: '4px solid blue',
        paddingLeft: '4px',
        paddingRight: '4px',
        fontWeight: 'bold',
    };

    theme.tree.node.toggle = {
        ...theme.tree.node.toggle,
        base: {
            ...theme.tree.node.toggle.base,
            marginLeft: '0',
            height: '0',
            width: '0',
        },
        wrapper: {
            ...theme.tree.node.toggle.base,
            position: 'absolute',
            top: '0',
            left: '0,',
            margin: '0',
            height: '0',
        },
        height: 0,
        width: 0,
        arrow: {
        },
    };
    return theme;
}
