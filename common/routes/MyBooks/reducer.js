import * as types from '../../constants'

const initialState = {
  lastFetched: null,
  error: null,
  data: null,
}

export default function currentBooks(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_BOOK_REQUEST:
      return {
        ...state,
        error: null,
      }
    case types.LOAD_BOOK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        lastFetched: action.meta.lastFetched,
      }
    case types.LOAD_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
