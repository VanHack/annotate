import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

it('renders without throwing', () => {
    const props = {id: 0, title:"test", description:"test", image:"test.jpg"}
    shallow(<Content {...props}/>);
});