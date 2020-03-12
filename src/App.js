import React from 'react';
import './App.css';
import TreeView from "./TreeView";
import {data} from "./data";

function App() {
    console.log(JSON.stringify(data));
    console.log(data);
    return <div className="App">
        <h1>Tree View via Decorators</h1>
        <hr/>
        <TreeView data={{...data}}/>
    </div>;
}

export default App;
