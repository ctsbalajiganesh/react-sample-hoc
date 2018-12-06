import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UserCity } from './userCity';

Enzyme.configure({ adapter: new Adapter() });

describe('UserCity Component Testing', () => {
    const subject = shallow( <UserCity /> )
    it('renders without city name', () => {
        expect(subject.find('p[data-qa="city-name"]').text()).toEqual('My City is !')
    });
    it('renders the city name', () => {
        subject.setProps({
            user: {
                city: 'Chennai'
            }
        })
        expect(subject.find('p[data-qa="city-name"]').text()).toEqual('My City is Chennai!')
    });
});
