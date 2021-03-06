import '@testing-library/jest-dom/extend-expect';
import reducers from './reducers';

describe('Reducers', () => {
    test('RESET_TREE_DATA', () => {
        const state = reducers({
            data: {
                unnamed1: {
                    id: 'unnamed1',
                    name: 'unnamed1',
                    created_at: '2020-02-14T19:26:51.361Z',
                    updated_at: '2020-02-14T19:26:51.361Z',
                    classification: 'UNCLASSIFIED',
                    description: '',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'unnamed1',
                    strikes: [{
                        id: 'unnamed-0dd1d933-612b-4c05-a600-f67fa36053d7', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '2020-02-17T11:43:00.000Z', inputs: [{}], created_at: '2020-02-17T15:40:07.523Z', updated_at: '2020-02-17T15:40:07.523Z', scenario_id: 2, slug: 'unnamed-0dd1d933-612b-4c05-a600-f67fa36053d7',
                    }, {
                        id: 'unnamed1', name: 'unnamed1', lat: '40.0', lon: '-100.0', detonationDTG: '2222-11-11T11:22:00.000Z', inputs: [{}], created_at: '2020-02-17T15:45:58.695Z', updated_at: '2020-02-17T15:45:58.695Z', scenario_id: 2, slug: 'unnamed1',
                    }],
                },
                unnamed777: {
                    id: 'unnamed777',
                    name: 'test1234',
                    created_at: '2020-02-14T19:58:20.317Z',
                    updated_at: '2020-02-17T22:37:37.605Z',
                    classification: 'UNCLASSIFIED',
                    description: 'David UnDunnit',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'unnamed777',
                    strikes: [{
                        id: 'unnamed', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '1967-11-06T23:22:00.000Z', inputs: [{}], created_at: '2020-02-14T21:29:52.988Z', updated_at: '2020-02-17T15:49:20.745Z', scenario_id: 3, slug: 'unnamed',
                    }],
                },
                test2: {
                    id: 'test2', name: 'test2', created_at: '2020-03-02T19:55:01.275Z', updated_at: '2020-03-02T19:55:01.275Z', classification: 'UNCLASSIFIED', description: 'Yes', user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115', slug: 'test2', strikes: [],
                },
                demo: {
                    id: 'demo',
                    name: 'demo',
                    created_at: '2020-03-02T20:38:44.071Z',
                    updated_at: '2020-03-02T20:38:44.071Z',
                    classification: 'UNCLASSIFIED',
                    description: '',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'demo',
                    strikes: [{
                        id: 'new-strike', name: 'new-strike', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-02T15:42:00.000Z', inputs: [{}], created_at: '2020-03-02T20:42:55.098Z', updated_at: '2020-03-02T20:42:55.098Z', scenario_id: 12, slug: 'new-strike',
                    }, {
                        id: 'unnamed-dc176487-8b2c-4fc0-a487-f974c60bf649', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-10T11:05:00.000Z', inputs: [{}], created_at: '2020-03-10T15:06:00.374Z', updated_at: '2020-03-10T15:06:00.374Z', scenario_id: 12, slug: 'unnamed-dc176487-8b2c-4fc0-a487-f974c60bf649',
                    }, {
                        id: 'qqwerqwer', name: 'qqwerqwer', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-10T11:06:00.000Z', inputs: [{}], created_at: '2020-03-10T15:06:22.203Z', updated_at: '2020-03-10T15:06:22.203Z', scenario_id: 12, slug: 'qqwerqwer',
                    }],
                },
            },
        }, { type: 'RESET_TREE_DATA' });
        expect(state).toEqual({ data: null });
    });

    test('REFRESH_TREE_DATA', () => {
        const state = reducers({ data: null }, {
            type: 'REFRESH_TREE_DATA',
            payload: {
                unnamed1: {
                    id: 'unnamed1',
                    name: 'unnamed1',
                    created_at: '2020-02-14T19:26:51.361Z',
                    updated_at: '2020-02-14T19:26:51.361Z',
                    classification: 'UNCLASSIFIED',
                    description: '',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'unnamed1',
                    strikes: [{
                        id: 'unnamed-0dd1d933-612b-4c05-a600-f67fa36053d7', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '2020-02-17T11:43:00.000Z', inputs: [{}], created_at: '2020-02-17T15:40:07.523Z', updated_at: '2020-02-17T15:40:07.523Z', scenario_id: 2, slug: 'unnamed-0dd1d933-612b-4c05-a600-f67fa36053d7',
                    }, {
                        id: 'unnamed1', name: 'unnamed1', lat: '40.0', lon: '-100.0', detonationDTG: '2222-11-11T11:22:00.000Z', inputs: [{}], created_at: '2020-02-17T15:45:58.695Z', updated_at: '2020-02-17T15:45:58.695Z', scenario_id: 2, slug: 'unnamed1',
                    }],
                },
                unnamed777: {
                    id: 'unnamed777',
                    name: 'test1234',
                    created_at: '2020-02-14T19:58:20.317Z',
                    updated_at: '2020-02-17T22:37:37.605Z',
                    classification: 'UNCLASSIFIED',
                    description: 'David UnDunnit',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'unnamed777',
                    strikes: [{
                        id: 'unnamed', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '1967-11-06T23:22:00.000Z', inputs: [{}], created_at: '2020-02-14T21:29:52.988Z', updated_at: '2020-02-17T15:49:20.745Z', scenario_id: 3, slug: 'unnamed',
                    }],
                },
                test2: {
                    id: 'test2', name: 'test2', created_at: '2020-03-02T19:55:01.275Z', updated_at: '2020-03-02T19:55:01.275Z', classification: 'UNCLASSIFIED', description: 'Yes', user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115', slug: 'test2', strikes: [],
                },
                demo: {
                    id: 'demo',
                    name: 'demo',
                    created_at: '2020-03-02T20:38:44.071Z',
                    updated_at: '2020-03-02T20:38:44.071Z',
                    classification: 'UNCLASSIFIED',
                    description: '',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'demo',
                    strikes: [{
                        id: 'new-strike', name: 'new-strike', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-02T15:42:00.000Z', inputs: [{}], created_at: '2020-03-02T20:42:55.098Z', updated_at: '2020-03-02T20:42:55.098Z', scenario_id: 12, slug: 'new-strike',
                    }, {
                        id: 'unnamed-dc176487-8b2c-4fc0-a487-f974c60bf649', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-10T11:05:00.000Z', inputs: [{}], created_at: '2020-03-10T15:06:00.374Z', updated_at: '2020-03-10T15:06:00.374Z', scenario_id: 12, slug: 'unnamed-dc176487-8b2c-4fc0-a487-f974c60bf649',
                    }, {
                        id: 'qqwerqwer', name: 'qqwerqwer', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-10T11:06:00.000Z', inputs: [{}], created_at: '2020-03-10T15:06:22.203Z', updated_at: '2020-03-10T15:06:22.203Z', scenario_id: 12, slug: 'qqwerqwer',
                    }],
                },
            },
        });
        expect(state).toEqual({
            data: {
                unnamed1: {
                    id: 'unnamed1',
                    name: 'unnamed1',
                    created_at: '2020-02-14T19:26:51.361Z',
                    updated_at: '2020-02-14T19:26:51.361Z',
                    classification: 'UNCLASSIFIED',
                    description: '',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'unnamed1',
                    strikes: [{
                        id: 'unnamed-0dd1d933-612b-4c05-a600-f67fa36053d7', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '2020-02-17T11:43:00.000Z', inputs: [{}], created_at: '2020-02-17T15:40:07.523Z', updated_at: '2020-02-17T15:40:07.523Z', scenario_id: 2, slug: 'unnamed-0dd1d933-612b-4c05-a600-f67fa36053d7',
                    }, {
                        id: 'unnamed1', name: 'unnamed1', lat: '40.0', lon: '-100.0', detonationDTG: '2222-11-11T11:22:00.000Z', inputs: [{}], created_at: '2020-02-17T15:45:58.695Z', updated_at: '2020-02-17T15:45:58.695Z', scenario_id: 2, slug: 'unnamed1',
                    }],
                },
                unnamed777: {
                    id: 'unnamed777',
                    name: 'test1234',
                    created_at: '2020-02-14T19:58:20.317Z',
                    updated_at: '2020-02-17T22:37:37.605Z',
                    classification: 'UNCLASSIFIED',
                    description: 'David UnDunnit',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'unnamed777',
                    strikes: [{
                        id: 'unnamed', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '1967-11-06T23:22:00.000Z', inputs: [{}], created_at: '2020-02-14T21:29:52.988Z', updated_at: '2020-02-17T15:49:20.745Z', scenario_id: 3, slug: 'unnamed',
                    }],
                },
                test2: {
                    id: 'test2', name: 'test2', created_at: '2020-03-02T19:55:01.275Z', updated_at: '2020-03-02T19:55:01.275Z', classification: 'UNCLASSIFIED', description: 'Yes', user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115', slug: 'test2', strikes: [],
                },
                demo: {
                    id: 'demo',
                    name: 'demo',
                    created_at: '2020-03-02T20:38:44.071Z',
                    updated_at: '2020-03-02T20:38:44.071Z',
                    classification: 'UNCLASSIFIED',
                    description: '',
                    user_id: '8af01825-8dae-4b2b-89eb-126ba0f8c115',
                    slug: 'demo',
                    strikes: [{
                        id: 'new-strike', name: 'new-strike', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-02T15:42:00.000Z', inputs: [{}], created_at: '2020-03-02T20:42:55.098Z', updated_at: '2020-03-02T20:42:55.098Z', scenario_id: 12, slug: 'new-strike',
                    }, {
                        id: 'unnamed-dc176487-8b2c-4fc0-a487-f974c60bf649', name: 'unnamed', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-10T11:05:00.000Z', inputs: [{}], created_at: '2020-03-10T15:06:00.374Z', updated_at: '2020-03-10T15:06:00.374Z', scenario_id: 12, slug: 'unnamed-dc176487-8b2c-4fc0-a487-f974c60bf649',
                    }, {
                        id: 'qqwerqwer', name: 'qqwerqwer', lat: '40.0', lon: '-100.0', detonationDTG: '2020-03-10T11:06:00.000Z', inputs: [{}], created_at: '2020-03-10T15:06:22.203Z', updated_at: '2020-03-10T15:06:22.203Z', scenario_id: 12, slug: 'qqwerqwer',
                    }],
                },
            },
        });
    });
});
