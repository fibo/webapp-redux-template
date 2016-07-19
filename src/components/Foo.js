import React, { PropTypes } from 'react'

const Foo = ({ id, text }) => (
  <div id={id}>
    <span>{text}</span>
  </div>
)

Foo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string
}

Foo.defaultProps = { text: 'Bar' }

export default Foo
