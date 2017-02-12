import {
  LOAD_BOOK_REQUEST, LOAD_BOOK_SUCCESS, LOAD_BOOK_FAILURE,
}
  from '../../constants'

export function loadBook() {
  console.log('Loading BOOK')
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_BOOK_REQUEST })
    return axios.get('http://138.68.67.137:3000/book_recommendation', {
      headers: { 'X-Mocking': 'Enabled',
              },
    })
      .then(res => {
        dispatch({
          type: LOAD_BOOK_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now(),
          },
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_BOOK_SUCCESS}: `, error)
        dispatch({
          type: LOAD_BOOK_FAILURE,
          payload: error,
          error: true,
        })
      })
  }
}
