import React, { Component } from 'react'

export const withUser = WrappedComponent => {
    class WithUser extends Component {
        constructor(props) {
            super(props);
            this.state = {
                user: {
                    name: '',
                    city: ''
                }
            };
            // TODO - Added temporarily for data consumption
            sessionStorage.setItem('user', '{"name":"Anderson", "city": "Chennai"}')
        }

        componentWillMount() {
            const userDetails = JSON.parse(sessionStorage.getItem('user'))
            this.setState({
                user: userDetails !== null ? userDetails : {}
            })
        }

        componentWillUnmount() {
            sessionStorage.removeItem('user')
        }

        render() {
            const { user } = this.state
            return <WrappedComponent
                user={user}
                {...this.props} />;
        }
    }
    return WithUser;
};
