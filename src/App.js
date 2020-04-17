import React from 'react';
import './App.css';
import TreeView from "./TreeView";
import treeModel from "./treeModel";
import {Col, Container, Row} from "react-bootstrap";

function App() {

    return <div className="App">
        <Container fluid={"sm"}>
            <Row>
                <Col>
                    <h1>Tree View via Decorators</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <TreeView data={{...treeModel(null)}}/>
                </Col>
            </Row>
        </Container>
    </div>;
}

export default App;
