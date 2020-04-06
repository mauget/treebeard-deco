// Ref flow from https://codesandbox.io/s/q5ae9vg0
// Lou Mauget, 2020-02-20 (lotta 0's and 2's)

import React, {useState} from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import {decorators, Treebeard} from 'react-treebeard';
import CustomHeader from './CustomHeader';
import customTheme from './customTheme';

export default function TreeView(props) {

    const [theme] = useState(customTheme());
    const [data, setData] = useState(props.data);
    const [cursor, setCursor] = useState({active: false});

    decorators.Header = CustomHeader;

    const onToggle = (node, toggled) => {
        if (cursor) {
            // Remove previous node highlight
            cursor.active = false;
        }
        // Set current node highlight
        node.active = !node.active;
        node.toggled = toggled;
        setCursor(node);

        setData({...data});
    };

    return (
        <Treebeard
            decorators={decorators}
            style={theme}
            data={data}
            onToggle={onToggle}
        />
    );
}

TreeView.propTypes = {
    data: PropTypes.object.isRequired
};
