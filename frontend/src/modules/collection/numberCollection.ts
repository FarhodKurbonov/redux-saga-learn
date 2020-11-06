import { BaseAction, Actions } from './types';
import {call, put, takeEvery, all, take } from 'redux-saga/effects'
import {generateNewNumber, generateHigherNewNumber} from "../../api";
export type NumberCollectionState = number[];

// ==== Action creators ====
export const numberRequestStartAction = (): BaseAction => ({
  type: Actions.GET_NUMBER_REQUEST_START,
  payload: null,
});
export const numberRequestCompletedAction = ( numberGenerated: number ): BaseAction => ({
  type: Actions.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated
})
export const higherNumberRequestCompletedAction = ( numberGenerated: number ): BaseAction => ({
  type: Actions.GET_HIGHER_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated
})
export const cancelOnGoingNumberRequestAction = (): BaseAction => ({
  type: Actions.CANCEL_ONGOING_NUMBER_REQUEST,
  payload: null
})
export const numberRequestUserConfirmationAction = (goahead: boolean): BaseAction => {
  return{
    type: Actions.GET_NUMBER_REQUEST_USER_CONFIRMATION,
    payload: goahead
  }
}
export const startSocketSubscriptionAction : () => BaseAction = () => ({
  type: Actions.START_SOCKET_SUBSCRIPTION,
})
export const stopSocketSubscriptionAction : () => BaseAction = () => ({
  type: Actions.STOP_SOCKET_SUBSCRIPTION,
})

export const reducer = ( state: NumberCollectionState = [0], action: BaseAction) => {
  switch (action.type) {
    case Actions.GET_NUMBER_REQUEST_COMPLETED:
      return [...state, action.payload]
    case Actions.GET_HIGHER_NUMBER_REQUEST_COMPLETED:
      return [...state, action.payload]
  }
  return state
};


// === Side Effects ===
export function* watchNewGeneratedNumberRequestStartSaga( ) {
  yield all([
          takeEvery( Actions.GET_NUMBER_REQUEST_START, requestNewGeneratedNumberSaga),
      ])
}

function* requestNewGeneratedNumberSaga() {
  const result = yield take(Actions.GET_NUMBER_REQUEST_USER_CONFIRMATION);
  if(result.payload == true) {
    const {generatedNumber, generatedHigherNumber} = yield all({
      generatedNumber:  call(generateNewNumber),
      generatedHigherNumber:  call(generateHigherNewNumber)
    })
    yield put(numberRequestCompletedAction(generatedNumber))
    yield put(numberRequestCompletedAction(generatedHigherNumber))
  }


}




