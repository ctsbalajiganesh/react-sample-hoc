import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UserName } from './userName';

Enzyme.configure({ adapter: new Adapter() });

describe('UserCity Component Testing', () => {
    const subject = shallow( <UserName /> )
    it('renders without city name', () => {
        expect(subject.find('p[data-qa="user-name"]').text()).toEqual('My name is !')
    });
    it('renders the city name', () => {
        subject.setProps({
            user: {
                name: 'Anderson'
            }
        })
        expect(subject.find('p[data-qa="user-name"]').text()).toEqual('My name is Anderson!')
    });
});