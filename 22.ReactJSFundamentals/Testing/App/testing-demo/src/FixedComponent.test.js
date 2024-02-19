import React from 'react';
import { render } from '@testing-library/react';
import FixedComponent from './FixedComponent';

test('it renders without crashing', () => {
    render(<FixedComponent/>)
});

test('if matches snapshot', () => {
    const { asFragment } = render(<FixedComponent/>);
    expect(asFragment()).toMatchSnapshot();
})
