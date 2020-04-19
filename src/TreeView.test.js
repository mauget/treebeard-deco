import React from 'react';
import ReactDOM from 'react-dom';
import {Treebeard} from 'react-treebeard';

describe('TreeView', () => {

    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Treebeard data={{}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});
