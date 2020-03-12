/**
 * Returns a TreeBeard data model, given a list of scenarios
 */

export default function treeModel(scenarios) {
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

    Object.keys(scenarios).forEach((key) => {
        const item = {};
        item.name = key;
        item.data = {};
        tbData.children[0].children.push(item)
    });
    return tbData;
}
