import { Actions as CurrencyActions, BaseAction } from './types';
import {call, put, takeEvery, all, take } from 'redux-saga/effects'
export type NumberCollectionState = number[];

// ==== Action creators ====

export const startSocketSubscriptionAction : () => BaseAction = () => ({
  type: CurrencyActions.START_SOCKET_SUBSCRIPTION,
})
export const stopSocketSubscriptionAction : () => BaseAction = () => ({
  type: CurrencyActions.STOP_SOCKET_SUBSCRIPTION,
})

export const reducer = ( state: NumberCollectionState = [0], action: BaseAction) => {
  switch (action.type) {
    case CurrencyActions.START_SOCKET_SUBSCRIPTION:
      return [...state, action.payload]
    case CurrencyActions.STOP_SOCKET_SUBSCRIPTION:
      return [...state, action.payload]
  }
  return state
};


// === Side Effects ===
export function* watchNewGeneratedNumberRequestStartSaga( ) {
  yield all([
      ])
}

function* requestNewGeneratedNumberSaga() {
}




