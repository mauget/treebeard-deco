import treeModel from './treeModel';
import getContainers from './getContainers';

describe('treeModel', () => {
    test('that getContainers() creates expected Treebeard data', () => {
        const dataTb = treeModel(getContainers());

        expect(dataTb.children[0].children.length).toBe(4);
        expect(dataTb.children[0].children[0].name).toBe('Demo');
    });
});
