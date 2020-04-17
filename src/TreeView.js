// Ref flow from https://codesandbox.io/s/q5ae9vg0
// Lou Mauget, 2020-02-20 (lotta 0's and 2's)

import React, {useState} from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import {decorators, Treebeard} from 'react-treebeard';
import CustomHeader from './CustomHeader';
import customTheme from './customTheme';
import Button from "react-bootstrap/Button";
import treeModel from "./treeModel";
import getScenarios from "./getScenarios";

export default function TreeView(props) {
    const [theme] = useState(customTheme());
    const [data, setData] = useState(props.data);
    const [cursor, setCursor] = useState({active: false});

    decorators.Header = CustomHeader;

    const onToggle = (node, toggled) => {
        if (cursor) {
            // Remove previous node highlight if any
            cursor.active = false;
        }
        // Set current node highlight
        node.active = !node.active;
        node.toggled = toggled;
        setCursor(node);

        // Repaint tree
        setData({...data});
    };

    const [hasData, setHasData] = useState(false);
    const toggleData = () => {
        const rawData = hasData ? null : getScenarios(data);
        setData(treeModel(rawData));
        setHasData(!hasData);
    };

    console.log('raw data', data);

    return (
        <>
            <div>
                <Button onClick={toggleData}>{`${hasData ? "Clear" : "Load"} Scenarios`}</Button>
            </div>
            <br/>
            <Treebeard
                decorators={decorators}
                style={theme}
                data={data}
                onToggle={onToggle}
            />
        </>
    );
}

TreeView.propTypes = {
    data: PropTypes.object.isRequired
};
