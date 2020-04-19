import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import App, {ConnectedApp} from "./App";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import thunk from "redux-thunk";

Enzyme.configure({adapter: new Adapter()});

describe('App tests', () => {
    const middleware = [thunk];
    const mockStore = configureStore(middleware);
    let store;

    beforeEach(() => {
        store = mockStore({data: null});
    })

    test('render DUMB component', () => {
        const wrapper = shallow(<ConnectedApp data={{data: null}}/>);
        expect(wrapper.length).toEqual(1);
    });

    test('render smart component', () => {
        const wrapper = mount(<Provider store={store}><App data={{}}/></Provider>)
        expect(wrapper.length).toEqual(1);
    });

});
