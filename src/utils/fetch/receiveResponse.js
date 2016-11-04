export default function receiveResponse (dispatch, actionName) {
  return function (response) {
    dispatch({
      type: `${actionName}_SUCCESS`,
      response
    })
  }
}
