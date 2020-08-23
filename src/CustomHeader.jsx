import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FaFolder, FaFolderOpen} from 'react-icons/fa';
import {BiBomb} from "react-icons/bi";
import styled from 'styled-components';
import ContextModel from './ContextModel';

const StyledLabel = styled.span`
    padding-left: 0.2rem;
`;

const StyledFolder = styled.span`
    color: orange;
`;

const StyledLeaf = styled.span`
    color: red;
`;

function DisplayNode(props) {
    const {children, isFolder, isOpen} = {...props};
    return (
        <>
            {isFolder && !isOpen &&
            <StyledFolder>
                <FaFolder/>
            </StyledFolder>
            }
            {isFolder && isOpen &&
            <StyledFolder>
                <FaFolderOpen/>
            </StyledFolder>
            }
            {!isFolder &&
            <StyledLeaf>
                <BiBomb/>
            </StyledLeaf>
            }
            <StyledLabel>{children}</StyledLabel>
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
            <DisplayNode style={headerStyle}
                isFolder={isFolder}
                isOpen={isOpen}
                onClick={onHeaderClick}
                onContextMenu={onContextMenu}
            >
                {displayName}
            </DisplayNode>
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
