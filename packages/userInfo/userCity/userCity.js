import React from 'react'
import PropTypes from 'prop-types'
import { withUser } from '@react-components/shared-components/withUser'

export const UserCity = props => (
  <div className="user-container">
    <p data-qa="city-name">My City is {props.user.city}!</p>
  </div>
);

UserCity.propTypes = {
  user: PropTypes.object
}

UserCity.defaultProps = {
  user: {
    city: ''
  }
}

export default withUser(UserCity);