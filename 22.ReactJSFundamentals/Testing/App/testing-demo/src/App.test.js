import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Counter from './Counter';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('1 === 1', () => {
  expect(1).toBe(1);
});

test('it renders without crashing', () => {
  render(<Counter/>)
})

