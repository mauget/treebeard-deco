import React, {useState} from "react";
import {ContextModel} from "./ContextModel";

export default function CustomHeader(props) {

    const {node, style} = props;
    const displayName = node.name;
    const headerStyle = style.base;

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const togglePopup = () => setIsDialogOpen(!isDialogOpen);

    const onHeaderClick = (ev) => {
        ev.preventDefault();
        // Note: allow propagation so toggle can operate

        console.log('clicked node', node);
    };

    const onContextMenu = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();

        togglePopup();
    };

    return (
        <>
            <div style={headerStyle}>
                <div onClick={onHeaderClick} onContextMenu={onContextMenu}>
                    {displayName}
                </div>
            </div>
            <ContextModel show={isDialogOpen} onClose={togglePopup}/>
        </>
    );
};
