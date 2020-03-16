/**
 * Returns a TreeBeard data model, given a list of data item.
 * We sort inserted items sorted by names.
 */

export default function treeModel(dataItems) {

    const tbData = {
        name: 'Workspace',
        data: {},
        toggled: true,
        active: true,
        children: [
            {
                name: 'Scenarios',
                data: {},
                toggled: true,
                active: true,
                children: [
                    //* Programatically insert dynamic children here, such as these: */
                    // {
                    //     name: 'Unnamed1',
                    //     data: {},
                    // },
                    // {
                    //     name: 'Test1234',
                    //     data: {},
                    // },
                    // {
                    //     name: 'Test2',
                    //     data: {},
                    // },
                    // {
                    //     name: 'Demo',
                    //     data: {},
                    // }
                ],
            },
            {
                name: 'Base Layers',
                data: {},
                active: true,
                toggled: false,
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

                // Fixups
                delete child.data.name;

                insertionPoint.splice(insertionPoint.length, 0, child);

                console.log(`Created child object -- ${key}: item:`, child);
            } else {
                console.log('ERROR. Unexpected falsey key')
            }
        });

    return tbData;
}
