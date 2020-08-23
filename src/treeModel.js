/**
 * Returns a TreeBeard data model, given a list of data item.s
 * We sort inserted items sorted by names.
 */

export default function treeModel(dataArg) {
    const dataItems = dataArg || {};
    const tbData = {
        name: 'Workspace',
        data: {},
        toggled: true,
        active: false,
        children: [
            {
                name: 'Suites',
                data: {},
                toggled: true,
                active: false,
                children: [
                    //* Programmatically add dynamic children here */
                ],
            },
            {
                name: 'Base Suite',
                data: {},
                toggled: true,
                active: false,
                children: [
                    {
                        name: 'Before Each',
                        data: {},
                    },
                    {
                        name: 'After Each',
                        data: {},
                    },
                    {
                        name: 'Test Runner',
                        data: {},
                    },
                ],
            },
        ],
    };
    const insertionPoint = tbData.children[0].children;

    const isFiniteArray = (a) => a && Array.isArray(a) && a.length > 0;

    const insertOptionalNodes = (dataParent, treeParent) => {
        const { tests: nodes } = dataParent;

        if (isFiniteArray(nodes)) {
            const treeParentRef = treeParent;
            treeParentRef.toggled = true;
            treeParentRef.children = [];
            nodes.forEach((s) => {
                const aNode = {};
                aNode.name = `${s.name}`;
                aNode.data = s;
                aNode.active = false;

                treeParent.children.push(aNode);
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

                insertOptionalNodes(data, child);

                insertionPoint.splice(insertionPoint.length, 0, child);
            }
        });
    return tbData;
}
