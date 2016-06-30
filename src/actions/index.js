import fetch from 'isomorphic-fetch'

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'

export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'

function fetchTodos (api) {
  return (dispatch) => {
    dispatch({
      type: FETCH_TODOS_REQUEST
    })

    const baseURL = api.baseURL

    return fetch(`${baseURL}/todo/list`)
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

function receiveTodos () {
}
