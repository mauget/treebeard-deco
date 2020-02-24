import React from "react";
import nodeCallback from "./nodeCallback";

export default function CustomHeader(props) {

    const {node, style} = props;
    const displayName = node.name;
    const thisStyle = style.base;

    const handleHeaderClick = ev => {
        ev.preventDefault();

        // Invoke node-select processing
        nodeCallback(ev.target.innerText);
    };

    const handleContextMenu = ev => {
        ev.preventDefault();
        alert(`"${displayName}" right-clicked`);
    };

    return (
        <div
            className={"App-header"}
            style={thisStyle}
            onClick={handleHeaderClick}
            onContextMenu={handleContextMenu}>

            <div className={"App-header-name"}>
                {displayName}
            </div>
        </div>
    );
};
