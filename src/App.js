import React, {useEffect} from 'react';
import './App.css';
import TreeView from "./TreeView";
import {Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";

function ConnectedApp(props) {
    console.log('props', props);
    const {data} = {...props};

    // Used for logging only
    useEffect(() => {
        console.log('useEffect data', data);
    }, [data]);

    return <div className="App">
        <Container fluid={"sm"}>
            <Row>
                <Col>
                    <h1>Tree View via Decorators</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <TreeView data={data}/>
                </Col>
            </Row>
        </Container>
    </div>;
}

const mapStateToProps = (state) => ({data: state.data});

const App = connect(mapStateToProps)(ConnectedApp);
export default App;
