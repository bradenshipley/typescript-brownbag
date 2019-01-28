import React from 'react'
import PropTypes from 'prop-types'
const Child = props => {
  return <h1> {props.name}</h1>
}
Child.propTypes = {
  name: PropTypes.string.isRequired
}
export default Child
