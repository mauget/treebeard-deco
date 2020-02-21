import React from 'react';
import './App.css';
import TreeView from "./TreeView";
import {data} from "./data";

function App() {
    return <div className="App">
        <h1>Tree View via Decorators</h1>
        <hr/>
        <TreeView data={Object.assign({}, data)}/>
    </div>;
}

export default App;
