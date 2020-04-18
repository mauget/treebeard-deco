// Ref flow from https://codesandbox.io/s/q5ae9vg0
// Lou Mauget, 2020-02-20 (lotta 0's and 2's)

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import {decorators, Treebeard} from 'react-treebeard';
import CustomHeader from './CustomHeader';
import customTheme from './customTheme';
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {refreshTreeData, resetTreeData} from "./actions";
import treeModel from "./treeModel";

function ConnectedTreeView(props) {
    const {data, dispatch} = {...props};

    const [theme] = useState(customTheme());
    const [cursor, setCursor] = useState({active: false});
    const [localTreeData, setLocalTreeData] = useState({...treeModel(data)})

    useEffect(()=>{
        setLocalTreeData({...treeModel(data)});
    }, [data]);

    decorators.Header = CustomHeader;

    const [refresh, setRefresh] = useState(0);

    const onToggle = (node, toggled) => {
        if (cursor) {
            // Resets previous node's highlight, if any
            cursor.active = false;
        }
        // Set current node highlight
        node.active = !node.active;
        node.toggled = toggled;
        setCursor(node);

        setRefresh(refresh + 1);
    };

    const toggleScenarios = () => {
        console.log(`toggling data value`, data);
        if (data){
            dispatch(resetTreeData());
        } else {
            dispatch(refreshTreeData());
        }
    };

    console.log(`tree local data rendered ${refresh}`, localTreeData);

    return (
        <>
            <div>
                <Button onClick={toggleScenarios}>{`${data ? "Clear" : "Load"} Scenarios`}</Button>
            </div>
            <br/>
            <Treebeard
                decorators={decorators}
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
