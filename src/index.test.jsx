import '@testing-library/jest-dom/extend-expect';

describe('index.jsx', () => {
    it('renders without crashing', () => {
        const root = document.createElement('div');
        root.setAttribute('id', 'root');
        document.body.appendChild(root);
        // eslint-disable-next-line global-require
        require('./index');
    });
});
