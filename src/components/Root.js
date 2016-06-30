import React, { PropTypes } from 'react'

const Root = ({
  todos
}) => (
  <div>
    <h1>todos</h1>
    <ul>
    {
      todos.map(
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
