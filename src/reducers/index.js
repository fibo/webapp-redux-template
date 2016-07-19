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
      return Object.assign({},
        state,
        {
          todo: {
            list: action.todos,
            when_fetched: (new Date()).toString()
          }
        }
      )

    default:
      return state
  }
}
