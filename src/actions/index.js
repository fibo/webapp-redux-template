import fetch from 'isomorphic-fetch'
import {
  checkStatus,
  headersJSON,
  parseJSON,
  prepareRequest
} from '../utils/fetch'

function fetchTodos (api) {
  return (dispatch) => {
    const { receiveResponse, responseFailure } = prepareRequest(dispatch, 'FETCH_TODOS')

    const baseURL = api.baseURL
    const headers = headersJSON(api.token)
    const endpoint = `${baseURL}/todo/list`

    return fetch(endpoint, { headers })
      .then(checkStatus)
      .then(parseJSON)
      .then(receiveResponse)
      .catch(responseFailure)
  }
}

export function fetchTodosIfNeeded (api) {
  return (dispatch, getState) => {
    if (shouldFetchTodos(getState())) {
      return dispatch(fetchTodos(api))
    }
  }
}

function shouldFetchTodos ({ todos }) {
  return (todos.when_fetched === null)
}
