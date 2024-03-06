import React from "react";
import Nav from "./Nav";
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

it('Renders without crashing', () => {
    render(<MemoryRouter><Nav/></MemoryRouter>)
})