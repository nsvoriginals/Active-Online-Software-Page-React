import React from 'react'

import PropTypes from 'prop-types'

import './active-users.css'

const ActiveUsers = (props) => {
  return (
    <div className="active-users-active-users metrics">
      <span className="active-users-text">{props.Statistic}</span>
      <span className="active-users-text1">{props.Caption}</span>
    </div>
  )
}

ActiveUsers.defaultProps = {
  Caption: 'Caption',
  Statistic: 'Description',
}

ActiveUsers.propTypes = {
  Caption: PropTypes.string,
  Statistic: PropTypes.string,
}

export default ActiveUsers
