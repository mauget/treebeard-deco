import React from 'react';
import './App.css';
import TreeView from "./TreeView";
import treeModel from "./treeModel";
import getScenarios from "./getScenarios";

function App() {

    const reverse = (PassedComponent) =>
        ({ children, ...props }) =>
            <PassedComponent {...props}>
                {children.split("").reverse().join("")}
            </PassedComponent>;

    const name = (props) => <span>{props.children}</span>;

    // HOC
    const ReversedName = reverse(name);

    return <div className="App">
        &lt;ReversedName&gt;Hello&lt;/ReversedName&gt; evaluates to&nbsp;
        &quot;
        <ReversedName>Mauget</ReversedName>
        &quot;

        <h1>Tree View via Decorators</h1>
        <hr/>
        <TreeView data={{...treeModel(getScenarios())}}/>
    </div>;
}

export default App;
