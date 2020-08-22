import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import CustomHeader from './CustomHeader';

Enzyme.configure({ adapter: new Adapter() });

describe('CustomHeader tests', () => {
    const mock = {};

    test('shallow render', () => {
        const wrapper = shallow(<CustomHeader node={mock} style={mock} />);
        expect(wrapper.length).toEqual(1);
    });

    test('deeper render', () => {
        const wrapper = mount(<CustomHeader node={mock} style={mock} />);
        expect(wrapper.length).toEqual(1);
    });
});
