import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TreeView from './TreeView';
import { refreshTreeDataAsync } from './actions';
import styled from 'styled-components';

const View = styled.div`
    text-align: left;
    background-color: #282c34;
    color: lightgray;
    min-height: 90vh;
    margin: 0.5rem;
    border: lightgray;
    padding: 1.0rem;
    cursor: default;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
`;

const Heading = styled.h2`
    color: lightgray;
`;

export function ConnectedApp(props) {
    // console.log('props', props);
    const { data, dispatch } = { ...props };

    // Initially load tree
    useEffect(() => {
        dispatch(refreshTreeDataAsync());
    }, [dispatch]);

    return (
        <View>
            <Container>
                <Heading>Tree View via Decorators</Heading>
                <TreeView data={data} />
            </Container>
        </View>
    );
}

const mapStateToProps = (state) => ({ data: state.data });

const App = connect(mapStateToProps)(ConnectedApp);
export default App;
