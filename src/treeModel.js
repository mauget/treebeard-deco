/**
 * Returns a TreeBeard data model, given a list of data item.
 * We sort inserted items sorted by names.
 */

export default function treeModel(dataArg) {
    const dataItems = dataArg || {};
    const tbData = {
        name: 'Workspace',
        data: {},
        toggled: true,

        children: [
            {
                name: 'Scenarios',
                data: {},
                toggled: true,

                children: [
                    //* Programmatically add dynamic children here */
                ],
            },
            {
                name: 'Base Layers',
                data: {},

                toggled: true,
                children: [
                    {
                        name: 'Roads',
                        data: {},

                    },
                    {
                        name: 'Test 1',
                        data: {},

                    },
                    {
                        name: 'Test 2',
                        data: {},

                    },
                ],
            },
        ],
    };
    const insertionPoint = tbData.children[0].children;

    const isFiniteArray = (a) => a && Array.isArray(a) && a.length > 0;

    const insertOptionalStrikes = (dataParent, treeParent) => {
        const { strikes } = dataParent;

        if (isFiniteArray(strikes)) {
            const treeParentRef = treeParent;
            treeParentRef.toggled = true;
            treeParentRef.children = [];
            strikes.forEach((s) => {
                const aStrike = {};
                aStrike.name = `${s.name}`;
                aStrike.data = s;
                aStrike.active = false;

                treeParent.children.push(aStrike);
            });
        }
    };

    Object
        .keys(dataItems)
        .sort((a, b) => (a < b ? -1 : 1))
        .forEach((key) => {
            if (key) {
                const data = dataItems[key];
                const child = {};
                child.name = key;
                child.data = data;
                child.active = false;

                insertOptionalStrikes(data, child);

                insertionPoint.splice(insertionPoint.length, 0, child);
            }
        });
    return tbData;
}
