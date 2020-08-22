import treeModel from './treeModel';
import getScenarios from './getScenarios';

describe('treeModel', () => {
    test('that getScenarios() creates expected Treebeard data', () => {
        const dataTb = treeModel(getScenarios());

        expect(dataTb.children[0].children.length).toBe(4);
        expect(dataTb.children[0].children[0].name).toBe('demo');
    });
});
