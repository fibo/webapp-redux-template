import React, { Component, PropTypes } from 'react'

class Root extends Component {
  componentDidMount () {
    const {
      fetchTodosIfNeeded
    } = this.props

    fetchTodosIfNeeded()
  }

  render () {
    const {
      todo,
      title
    } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <h2>ToDo</h2>
        <ul>
          {todo.list.map(
            (item, i) => (
              <li key={i}>
                {item.content}
              </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

Root.propTypes = {
  fetchTodosIfNeeded: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired
}

Root.defaultProps = {
  fetchTodosIfNeeded: Function.prototype,
  title: 'Webapp Redux template',
  todos: []
}

export default Root
