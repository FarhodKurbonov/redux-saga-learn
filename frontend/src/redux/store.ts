import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import {rootSaga} from "./rootSaga";
import {logger} from 'redux-logger'
const sagaMiddleware = createSagaMiddleware()

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
  compose;

export const store = createStore(rootReducer,
    {},
    composeEnhancer(applyMiddleware(sagaMiddleware, logger)))

sagaMiddleware.run(rootSaga)
// store.subscribe(() => {
//     console.log(store.getState());
// });
