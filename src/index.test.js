import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';
// import {store} from "./index";

Enzyme.configure({adapter: new Adapter()});

// TODO This one ain't to-dones
describe('index.js', () => {
    // const middleware = [thunk];
    // const mockStore = configureStore(middleware);
    // let store;

    beforeEach(() => {
        // store = mockStore({data: null});
    })

    test('test', ()=>{
        const wrapper = shallow(<div/>);
    });
});
