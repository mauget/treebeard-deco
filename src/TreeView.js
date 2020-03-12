// Lifted flow from https://codesandbox.io/s/q5ae9vg0
// Lou Mauget, 2020-02-20 (lotta 0's and 2's)

import React, {useState} from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import {decorators, Treebeard} from 'react-treebeard';
import CustomHeader from './CustomHeader';
import getCustomTheme from './getCustomTheme';

export default function TreeView(props) {

    const [cursor, setCursor] = useState(null);
    const [theme] = useState(getCustomTheme());

    decorators.Header = CustomHeader;

    const handleToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor({cursor: node});
    };

    return (
        <Treebeard
            style={theme}
            data={props.data}
            onToggle={handleToggle}
        />
    );
}

TreeView.propTypes = {
    data: PropTypes.object.isRequired
};
