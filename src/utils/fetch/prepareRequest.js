import receiveResponse from './receiveResponse'
import responseFailure from './responseFailure'

export default function prepareRequest (dispatch, actionName) {
  dispatch({ type: `${actionName}_REQUEST` })

  return {
    receiveResponse: receiveResponse(dispatch, actionName),
    responseFailure: responseFailure(dispatch, actionName)
  }
}
