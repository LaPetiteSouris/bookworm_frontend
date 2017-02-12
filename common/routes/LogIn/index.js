if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import {injectAsyncReducer} from '../../store'

export default function createRoutes(store) {
  return {
    path: 'login',
    getComponents (location, cb) {
      require.ensure([
        './containers/LoginPageSmart',
        './reducer'
      ], (require) => {
        let LoginPage = require('./containers/LoginPageSmart').default
        cb(null, LoginPage)
      })
    },
  }
}
