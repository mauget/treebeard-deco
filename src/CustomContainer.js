import React from "react";
import {decorators} from "react-treebeard";

export default class CustomContainer extends decorators.Container {

    renderToggle = () => super.renderToggle();

    render() {
        const {style, decorators, terminal, onClick, node} = this.props;

        return (
            <div style={style.container[0]}>
                <decorators.Header node={node} style={style.header}/>
                <span onClick={onClick} style={{float: "left", cursor: "pointer"}}>
                    {terminal ? null : this.renderToggle()}
                </span>
            </div>
        );
    }
}
