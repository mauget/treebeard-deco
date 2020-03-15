import React, {useState} from "react";
import nodeCallback from "./nodeCallback";

const NotSelected = {backgroundColor: "#282c34", color: "#d0d0d0"};
const Selected = {backgroundColor: "#c0c0c0", color: "black"};

export default function CustomHeader(props) {

    const {node, style} = props;
    const displayName = node.name;
    const headerStyle = style.base;

    const [selected, setSelected] = useState(NotSelected);

    const handleHeaderClick = ev => {
        ev.preventDefault();
        setSelected(Selected);

        // Invoke imported node-select callback
        nodeCallback(displayName);
    };

    const handleContextMenu = ev => {
        ev.preventDefault();

        // Context menu processing placeholder
        alert(`"${displayName}" right-clicked. Replace this by a context popup.`);
    };

    const handleMouseEnter = ev => {
        ev.preventDefault();
        setSelected(Selected);
    };

    const handleMouseLeave = ev => {
        ev.preventDefault();
        setSelected(NotSelected);
    };

    return (
        <div
            className={"App-header"}
            style={headerStyle}
            onClick={handleHeaderClick}
            onContextMenu={handleContextMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <div
                style={selected}
                className={"App-header-name"}
            >
                {displayName}
            </div>
        </div>
    );
};
