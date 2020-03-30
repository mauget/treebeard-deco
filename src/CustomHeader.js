import React, {useState, useEffect, useContext} from "react";
import {NodeContext, registerHeaderDeselect} from "./customHeaderRegistry";
import {ContextModel} from "./ContextModel";

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

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const toggleContextModal = () => setIsDialogOpen(!isDialogOpen);

    const onHeaderClick = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        context.resetAllSelections();
        setSelection();
    };

    const onContextMenu = ev => {
        onHeaderClick(ev);
        toggleContextModal();
    };

    return (
        <>
            <div className={"App-header"} style={headerStyle}>
                <div style={selected} className={"App-header-name"} onClick={onHeaderClick} onContextMenu={onContextMenu}>
                    {displayName}
                </div>
            </div>
            <ContextModel show={isDialogOpen} onClose={toggleContextModal}/>
        </>
    );
};
