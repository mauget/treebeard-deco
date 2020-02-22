import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('main app heading', () => {
  const { getByText } = render(<App />);
  const h1Text = getByText(/Tree View/i);
  expect(h1Text).toBeInTheDocument();
});
