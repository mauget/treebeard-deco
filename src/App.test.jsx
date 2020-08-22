import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {mount, shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App, {ConnectedApp} from './App';

describe('App tests', () => {
    const middleware = [thunk];
    const mockStore = configureStore(middleware);
    let store;

    beforeEach(() => {
        store = mockStore({data: null});
    });

    test('render DUMB component', () => {
        const wrapper = shallow(<ConnectedApp data={{ data: null }}/>);
        expect(wrapper.length).toEqual(1);
    });

    test('render smart component', () => {
        const wrapper = mount(<Provider store={store}><App data={{ }}/></Provider>);
        expect(wrapper.length).toEqual(1);
    });
});
