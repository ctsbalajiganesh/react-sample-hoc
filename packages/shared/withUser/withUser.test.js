import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { withUser } from './withUser';

Enzyme.configure({ adapter: new Adapter() });

describe('withUser', () => {
    it('Check if user is populated when data is available', () => {
        const TestComponent = withUser('TestComponent');
        const subject = shallow(<TestComponent />);
        expect(subject.props('user')).toEqual({user: {name: 'Anderson', city: 'Chennai'}});
        sessionStorage.removeItem('user');
    });
});
