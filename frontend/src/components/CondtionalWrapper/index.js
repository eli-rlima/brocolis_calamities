// Global
import React from 'react'
import PropTypes from 'prop-types'

function ConditionalWrapper({ condition, children }) {
  return condition ? children : <div />
}

ConditionalWrapper.defaultProps = {
  condition: false,
  children: null,
}

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool,
  children: PropTypes.node,
}

export default ConditionalWrapper
