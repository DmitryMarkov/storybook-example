import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ bg, children }) => (
  <button style={{ backgroundColor: bg }}>{children}</button>
)

Button.propTypes = {
  /** background color
   *
   **/
  bg: PropTypes.string,
  /** text on Button */
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  bg: 'green',
}

export { Button }
