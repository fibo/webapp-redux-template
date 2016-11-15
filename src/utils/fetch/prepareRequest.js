import receiveData from './receiveData'
import responseFailure from './responseFailure'

export default function prepareRequest (dispatch, actionName, actionParams) {
  dispatch(Object.assign({ type: `${actionName}_REQUEST` }, actionParams))

  return {
    receiveData: receiveData(dispatch, actionName),
    responseFailure: responseFailure(dispatch, actionName)
  }
}
