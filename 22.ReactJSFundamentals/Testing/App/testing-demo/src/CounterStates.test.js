import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CounterStates from './CounterStates';

test('it renders without crashing', () => {
    render(<CounterStates/>)
});

test('playing with queries', () => {
    const { getByText, getAllByText, queryByText, 
        queryAllByText, getByPlaceholderText, getByLabelText } = render(<CounterStates/>);
    //console.log(getByText(`Let's count`, {exact: false}));
    //console.log(getAllByText(`count`, {exact: false}));
    //console.log(queryByText(`count`, {exact: false}));
    //console.log(queryAllByText(`count`, {exact: false}));
    console.log(getByPlaceholderText('username'));
    console.log(getByLabelText('Username'));
});

test('button increments counter', () => {
    const { getByText, debug } = render(<CounterStates/>);
    debug();
    const h2 = getByText('Current count: 0');
    const btn = getByText('Add');
    fireEvent.click(btn);
    expect(h2).toHaveTextContent('1');
    expect(h2).not.toHaveTextContent('0');
})