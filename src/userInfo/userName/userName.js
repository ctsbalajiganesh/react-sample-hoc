import React from 'react'
import PropTypes from 'prop-types'
import { withUser } from '../../shared/withUser/withUser'

export const UserName = props => (
  <div className="user-container">
    <p data-qa="user-name">My name is {props.user.name}!</p>
  </div>
);


UserName.propTypes = {
  user: PropTypes.object
}

UserName.defaultProps = {
  user: {
    name: ''
  }
}

export default withUser(UserName);