import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleOne from './exampleOne';

Enzyme.configure({ adapter: new Adapter() });

describe('ExampleOne', () => {
    const subject = shallow(<ExampleOne />);

    it('Check for title text', () => {
        expect(subject.find('h3').text()).toEqual('Example 1 - A simple HOC');
    })

    it('Check render method to load components', () => {
        expect(subject.find('UserName')).toBeTruthy();
        expect(subject.find('UserCity')).toBeTruthy();
    })
});