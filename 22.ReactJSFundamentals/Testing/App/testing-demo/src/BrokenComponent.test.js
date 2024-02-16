import React from 'react';
import { render } from '@testing-library/react';
import BrokenComponent from './BrokenComponent';

test('it renders without crushing', () => {
    render(<BrokenComponent/>);
});