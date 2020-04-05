// Lifted flow from https://codesandbox.io/s/q5ae9vg0
// Lou Mauget, 2020-02-20 (lotta 0's and 2's)

import React, {useState} from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import {decorators, Treebeard} from 'react-treebeard';
import CustomHeader from './CustomHeader';
import getCustomTheme from './getCustomTheme';
import {resetHeaderRegistry} from "./customHeaderRegistry";

export default function TreeView(props) {


    const [theme] = useState(getCustomTheme());
    const [viewState, setViewState] = useState(0);

    const repaint = () => {
        setViewState(viewState + 1);
    };

    resetHeaderRegistry();
    decorators.Header = CustomHeader;

    const onToggle2 = (node, toggled) => {
        if (node.children) {
            node.toggled = toggled;
            repaint();
        }
    };

 /*   const [cursor, setCursor] = useState({});

    const onToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor(node);
    };*/

    return (
        <Treebeard
            style={theme}
            data={props.data}
            onToggle={onToggle2}
        />
    );
}

TreeView.propTypes = {
    data: PropTypes.object.isRequired
};

