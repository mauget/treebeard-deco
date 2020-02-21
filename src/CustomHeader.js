import React from "react";

export default function CustomHeader(props) {

    const {node, style} = props;
    const displayName = node.name;
    const thisStyle = style.base;

    const ignoreHeaderClick = ev => {
        ev.preventDefault();
        ev.stopPropagation();
        // Invoke optional alternative processing here
    };

    const handleContextMenu = ev => {
        ev.preventDefault();
        alert(`"${displayName}" right-clicked`);
    };

    return (
        <div
            className={"App-header"}
            style={thisStyle}
            onClick={ignoreHeaderClick}
            onContextMenu={handleContextMenu}>

            <div className={"App-header-name"}>
                {displayName}
            </div>
        </div>
    );
};
