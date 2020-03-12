import React from 'react';
import treeModel from './treeModel';

const scenariosJson = '{"name":"Workspace","data":{},"toggled":true,"active":true,"children":[{"name":"Scenarios","data":{},"toggled":true,"active":true,"children":[{"name":"Unnamed1","data":{}},{"name":"Test1234","data":{}},{"name":"Test2","data":{}},{"name":"Demo","data":{}}]},{"name":"Base Layers","data":{},"active":true,"toggled":false,"children":[{"name":"Roads","data":{}},{"name":"Test 1","data":{}},{"name":"Test 2","data":{}}]}]}';

const scenarios = JSON.parse(scenariosJson);

it('produces Treebeard data without crashing', () => {
    const dataTb = treeModel(scenarios);
    console.log(dataTb);
    console.log(dataTb.children[0].children);

    expect(dataTb.children[0].children.length).toBe(4);
    expect(dataTb.children[0].children[3].name).toBe('Demo');
    console.log(JSON.stringify(dataTb));
});
