import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import {decorators, Treebeard} from 'react-treebeard';
import styled from 'styled-components';
import {connect} from 'react-redux';
import CustomHeader from './CustomHeader';
import customTheme from './customTheme';
import { refreshTreeDataAsync, resetTreeData } from './actions';
import treeModel from './treeModel';

const StyledButton = styled.button`
    background: #444444;
    color: lightgray;
    margin: 0.5rem;
`;

function ConnectedTreeView(props) {
    const {data, dispatch} = {...props};

    const [theme] = useState(customTheme());
    const previousNode = useRef({active: false});
    const [localTreeData, setLocalTreeData] = useState({...treeModel(data)});

    useEffect(() => {
        // Set local state data to format accepted by TreebeardJS
        setLocalTreeData({...treeModel(data)});
    }, [data]);

    const [renderCount, setRenderCount] = useState(0);
    const refresh = () => setRenderCount(renderCount + 1);

    const onToggle = (node, toggled) => {
        // De-highlight previous
        previousNode.current.active = false;

        // Set current node highlight (i.e. active), toggle,
        // and cache it for next onToggle to de-highlight it
        const currentNode = node;
        currentNode.active = !currentNode.active;
        currentNode.toggled = toggled;
        previousNode.current = node;

        refresh();
    };

    const toggleFolders = () => {
        if (data) {
            dispatch(resetTreeData());
            return;
        }
        dispatch(refreshTreeDataAsync());
    };

    // eslint-disable-next-line no-console
    console.log('tree local data to render', localTreeData);

    // Replacer header decorator of default decorators
    decorators.Header = CustomHeader;

    return (
        <div>
            <StyledButton onClick={toggleFolders}>{`${data ? 'Clear' : 'Load'} Dynamic Data`}</StyledButton>
            <Treebeard
                style={theme}
                data={localTreeData}
                onToggle={onToggle}
            />
        </div>
    );
}

ConnectedTreeView.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        active: PropTypes.bool,
        toggled: PropTypes.bool,
        children: PropTypes.arrayOf(PropTypes.object),
        data: PropTypes.shape({}),
    }),
};

ConnectedTreeView.defaultProps = {
    data: {},
}

const mapStateToProps = (state) => ({data: state.data});

const TreeView = connect(mapStateToProps)(ConnectedTreeView);
export default TreeView;
