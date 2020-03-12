import React from "react";
// noinspection ES6CheckImport
import {decorators} from "react-treebeard";

export default class CustomContainer extends decorators.Container {

    render() {
        const {style, decorators, terminal, onClick, node} = this.props;

        return <div >
            <decorators.Header node={node} style={style.header}/>
            <span onClick={onClick} style={{float: "left", cursor: "pointer"}}>
                    {terminal ? null : this.renderToggle()}
                </span>
        </div>;
    }
}
