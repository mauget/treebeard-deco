import getDataObject from "./getDataObject";

describe('getDataObject', () => {
    const member = 'Test 1';

    it('should return a finite data object', () => {
        const dataObject = getDataObject();
        const keyZero = Object.keys(dataObject);
        expect(keyZero.length).toBeTruthy();
    });

    test(`that first child object is "${member}"`, () => {
        const dataObject = getDataObject();
        const keyZero = Object.keys(dataObject)[0];

        expect(keyZero).toEqual(member);
    });

    test(`that first child object has ID and name of "${member}"`, () => {
        const dataObject = getDataObject();
        const keyZero = Object.keys(dataObject)[0];
        const objectZero = dataObject[keyZero];

        expect(objectZero).toBeDefined();
        expect(objectZero.id).toEqual(member);
        expect(objectZero.name).toEqual(member);
    });
});
