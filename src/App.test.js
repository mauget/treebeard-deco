import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('main app heading', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Tree View/i);
  expect(h1).toBeInTheDocument();
});
