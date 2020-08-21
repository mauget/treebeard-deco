// Ref flow from https://codesandbox.io/s/q5ae9vg0
// Lou Mauget, 2020-02-20 (lotta 0's and 2's)

import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import {decorators, Treebeard} from 'react-treebeard';
import CustomHeader from './CustomHeader';
import customTheme from './customTheme';
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {refreshTreeDataAsync, resetTreeData} from "./actions";
import treeModel from "./treeModel";

function ConnectedTreeView(props) {
    const {data, dispatch} = {...props};

    const [theme] = useState(customTheme());
    const previousNode = useRef({active: false});
    const [localTreeData, setLocalTreeData] = useState({...treeModel(data)})

    useEffect(()=>{
        // Set local state data to format accepted by TreebeardJS
        setLocalTreeData({...treeModel(data)});
    }, [data]);


    const [renderCount, setRenderCount] = useState(0);
    const reRender = () => setRenderCount(renderCount + 1);

    const onToggle = (node, toggled) => {
        // Extinguish previous
        previousNode.current.active = false;

        // Set current node highlight and toggle.
        node.active = !node.active;
        node.toggled = toggled;

        // Cache this node
        previousNode.current = node;

        reRender();
    };

    const toggleScenarios = () => {
        console.log(`toggling data from value`, data);
        if (data){
            dispatch(resetTreeData());
        } else {
            dispatch(refreshTreeDataAsync());
        }
    };

    console.log(`tree local data to render`, localTreeData);

    // Replacer header decorator of default decorators
    decorators.Header = CustomHeader;

    return (
        <>
            <div>
                <Button onClick={toggleScenarios}>{`${data ? "Clear" : "Load"} Scenarios`}</Button>
            </div>
            <br/>
            <Treebeard
                style={theme}
                data={localTreeData}
                onToggle={onToggle}
            />
        </>
    );
}

ConnectedTreeView.propTypes = {
    data: PropTypes.object
};

const mapStateToProps = (state) => ({data: state.data});

const TreeView = connect(mapStateToProps)(ConnectedTreeView);
export default TreeView;
