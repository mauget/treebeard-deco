import React from 'react';
import ReactDOM from 'react-dom';
import { Treebeard } from 'react-treebeard';

describe('TreeView', () => {
    it('renders empty data prop without crashing', () => {
        const data = {};
        // eslint-disable-next-line no-undef
        const div = document.createElement('div');
        ReactDOM.render(<Treebeard data={data}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
