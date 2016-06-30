import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS
} from '../actions'

const initialState = {
  todo: {
    list: [],
    when_fetched: null
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_FAILURE:
      return state

    case FETCH_TODOS_REQUEST:
      return state

    case FETCH_TODOS_SUCCESS:
      return state

    default:
      return state
  }
}
