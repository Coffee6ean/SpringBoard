import React from 'react';
import { render } from '@testing-library/react';
import CounterStates from './CounterStates';

test('it renders without crashing', () => {
    render(<CounterStates/>)
});

test('playing with queries', () => {
    const { getByText } = render(<CounterStates/>);
    console.log(getByText(`Let's count`, {exact: false}));
});

test('playing with queries', () => {
    const { getByText, getAllByText, queryByText, 
        queryAllByText, getByPlaceholderText, getByLabelText } = render(<CounterStates/>);
    //console.log(getAllByText(`count`, {exact: false}));
    //console.log(queryByText(`count`, {exact: false}));
    //console.log(queryAllByText(`count`, {exact: false}));
    console.log(getByPlaceholderText('username'));
    console.log(getByLabelText('Username'));
});