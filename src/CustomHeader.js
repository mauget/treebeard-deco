import React, {useState, useEffect, useContext} from "react";
import {NodeContext, registerHeaderDeselect} from "./customHeaderRegistry";
import nodeCallback from "./nodeCallback";

const NotSelected = {
    backgroundColor: "#282c34",
    color: "#d0d0d0",
};

const Selected = {
    backgroundColor: "#c0c0c0",
    color: "black",
    border: "2px solid blue",
    paddingLeft: "2px",
    paddingRight: "2px",
};

export default function CustomHeader(props) {

    const {node, style} = props;
    const displayName = node.name;
    const headerStyle = style.base;

    const [selected, setSelected] = useState(NotSelected);
    const context = useContext(NodeContext);

    const resetSelection = () => setSelected(NotSelected);
    const setSelection = () => setSelected(Selected);

    useEffect(() => {
        setTimeout(() => {
            registerHeaderDeselect(resetSelection);
        }, 0)
    }, []);

    const doEventPreamble = (ev) => {
        ev.preventDefault();
        context.resetAllSelections();
        setSelection();
    };

    const onHeaderClick = ev => {
        doEventPreamble(ev);
        setTimeout(() => nodeCallback(displayName), 0);
    };

    const onContextMenu = ev => {
        doEventPreamble(ev);
        setTimeout(() => alert(`"${displayName}" right-clicked. Replace this by a context popup.`), 0);
    };

    return (
        <div
            className={"App-header"}
            style={headerStyle}
            onClick={onHeaderClick}
            onContextMenu={onContextMenu}
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
