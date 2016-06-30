import fetch from 'isomorphic-fetch'
import headersJSON from '../util/headersJSON'

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'

export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'

export function addTodo (api, todo) {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO_REQUEST
    })

    const baseURL = api.baseURL
    const body = JSON.stringify(todo)
    const headers = headersJSON(api.token)
    const endpoint = `${baseURL}/todo`
    const method = 'POST'

    return fetch(endpoint, { method, headers, body })
      .then((response) => response.json())
      .catch((error) => {
        dispatch({
          type: ADD_TODO_FAILURE,
          error
        })
      })
    .then((json) => dispatch({
      type: ADD_TODO_SUCCESS,
      todo: Object.assign({ json, todo })
    }))
  }
}

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'

export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'

function fetchTodos (api) {
  return (dispatch) => {
    dispatch({
      type: FETCH_TODOS_REQUEST
    })

    const baseURL = api.baseURL
    const headers = headersJSON(api.token)

    return fetch(`${baseURL}/todo/list`, { headers })
      .then((response) => response.json())
      .catch((error) => {
        dispatch({
          type: FETCH_TODOS_FAILURE,
          error
        })
      })
      .then((json) => dispatch(receiveTodos(json)))
  }
}

export function fetchTodosIfNeeded (api) {
  return (dispatch, getState) => {
    if (shouldFetchTodos(getState())) {
      return dispatch(fetchTodos(api))
    }
  }
}

function shouldFetchTodos ({ todo }) {
  return (todo.list.length === 0) && (todo.when_fetched === null)
}

function receiveTodos (todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  }
}
