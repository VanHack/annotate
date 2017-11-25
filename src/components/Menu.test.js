import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';

it('renders menu with accessibility-enabled links', () => {
    const menu = shallow(<Menu/>);
    expect(menu.contains(<NavLink to="/" role="navigation" aria-controls="home" tabIndex="0">Home</NavLink>)).toEqual(true);
});