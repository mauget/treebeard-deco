import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextModel from './ContextModel';

export default function CustomHeader(props) {
    const { node, style } = props;
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

    return (
        <>
            <div style={headerStyle}>
                {/* eslint-disable-next-line max-len */}
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div onClick={onHeaderClick} onContextMenu={onContextMenu}>
                    {displayName}
                </div>
            </div>
            <ContextModel show={isDialogOpen} onClose={togglePopup} />
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
