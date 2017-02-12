if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes(store) {
  return {
    path: 'mybooks',
    getComponents(location, cb) {
      require.ensure([
        './containers/MyBookPage',
        './reducer',
      ], (require) => {
        const MyBookPage = require('./containers/MyBookPage').default
        const mybooksReducer = require('./reducer').default
        injectAsyncReducer(store, 'books', mybooksReducer)
        cb(null, MyBookPage)
      })
    },
  }
}
