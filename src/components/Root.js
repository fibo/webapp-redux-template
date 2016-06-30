import React, { PropTypes } from 'react'

const Root = ({
  todo
}) => (
  <div>
    <h1>todos</h1>
    <ul>
    {
      todo.list.map(
        (todo) => (
          <li>todo.content</li>
        )
      )
    }
    </ul>
  </div>
)

Root.propTypes = {
  todos: PropTypes.array.isRequired
}

Root.defaultProps = {
  todos: []
}

export default Root
