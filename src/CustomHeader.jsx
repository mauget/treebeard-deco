import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { BiBomb } from "react-icons/bi";
import ContextModel from './ContextModel';

function DisplayNode(props) {
    const {children, isFolder, isOpen} = {...props};
    const subTreeIndent = {marginLeft: '0.25rem'};
    return (
        <>
            {isFolder && !isOpen && <FaFolder style={{color: "orange"}}/>}
            {isFolder && isOpen && <FaFolderOpen style={{color: "orange"}}/>}
            {!isFolder && <BiBomb  style={{color: "red"}}/>}
            <span style={subTreeIndent}>{children}</span>
        </>
    );
}

export default function CustomHeader(props) {
    const {node, style} = props;
    const displayName = node.name;
    const headerStyle = style.base;

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const togglePopup = () => setIsDialogOpen(!isDialogOpen);

    const onHeaderClick = (ev) => {
        ev.preventDefault();

        // eslint-disable-next-line no-console
        console.log('clicked node', node);
    };

    const onContextMenu = (ev) => {
        ev.preventDefault();

        togglePopup();
    };

    const isFolder = node.children;
    const isOpen = node.toggled;

    return (
        <>
            <div style={headerStyle}>
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
                <div onClick={onHeaderClick} onContextMenu={onContextMenu}>
                    <DisplayNode isFolder={isFolder} isOpen={isOpen}>{displayName}</DisplayNode>
                </div>
            </div>
            <ContextModel show={isDialogOpen} onClose={togglePopup}/>
        </>
    );
}

CustomHeader.propTypes = {
    node: PropTypes.shape({
        name: PropTypes.string,
        active: PropTypes.bool,
        toggled: PropTypes.bool,
        children: PropTypes.arrayOf(PropTypes.object),
        data: PropTypes.shape({}),
    }).isRequired,
    style: PropTypes.shape({
        base: PropTypes.shape({}),
    }).isRequired,
};
