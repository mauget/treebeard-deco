import treeModel from './treeModel';
import getDataObject from './getDataObject';

describe('treeModel', () => {
    test('that getDataObject() creates expected Treebeard data', () => {
        const dataTb = treeModel(getDataObject());

        expect(dataTb.children[0].children.length).toBe(4);
        expect(dataTb.children[0].children[0].name).toBe('Demo');
    });
});
