import React from 'react';
import './App.css';
import TreeView from "./TreeView";
import treeModel from "./treeModel";
import getScenarios from "./getScenarios";

function App() {

    return <div className="App">
        <h1>Tree View via Decorators</h1>
        <hr/>
        <TreeView data={{...treeModel(getScenarios())}}/>
    </div>;
}

export default App;
