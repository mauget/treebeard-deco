/**
 * Returns a TreeBeard data model, given a list of data item.
 * We sort inserted items sorted by names.
 */

export default function treeModel(dataItems) {

    const tbData = {
        name: 'Workspace',
        data: {},
        toggled: true,
        // active: false,
        children: [
            {
                name: 'Scenarios',
                data: {},
                toggled: true,
                // active: false,
                children: [
                    //* Programmatically add dynamic children here */
                ],
            },
            {
                name: 'Base Layers',
                data: {},
                // active: false,
                toggled: false,
                children: [
                    {
                        name: 'Roads',
                        data: {},
                        // active: false,
                    },
                    {
                        name: 'Test 1',
                        data: {},
                        // active: false,
                    },
                    {
                        name: 'Test 2',
                        data: {},
                        // active: false,
                    }
                ],
            },
        ],
    };
    const insertionPoint = tbData.children[0].children;

    Object
        .keys(dataItems)
        .sort((a, b) => (a.toUpperCase() <  b.toUpperCase() ? -1 : 1))
        .forEach((key) => {
            if (key) {
                const child = {};
                child.name = `${key[0].toUpperCase()}${key.slice(1)}`;
                child.data = dataItems[key];
                child.active = false;

                insertionPoint.splice(insertionPoint.length, 0, child);

                // console.log(`Created child object -- ${key}: item:`, child);
            } else {
                console.log('ERROR. Unexpected falsey key')
            }
        });

    return tbData;
}
