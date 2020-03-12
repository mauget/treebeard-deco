import React from 'react';
import treeModel from './treeModel';
import getScenarios from "./getScenarios";

it('treeModel(getScenarios()) creates expected Treebeard data', () => {
    const dataTb = treeModel(getScenarios());

    expect(dataTb.children[0].children.length).toBe(4);
    expect(dataTb.children[0].children[3].name).toBe('demo');
    // console.log(JSON.stringify(dataTb));
});
