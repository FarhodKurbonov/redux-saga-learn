import { BaseAction, Actions } from './types';
import {call, put, takeEvery, all, race } from 'redux-saga/effects'
import {generateNewNumber, generateHigherNewNumber} from "../../api";
export type NumberCollectionState = number[];

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

export const reducer = ( state: NumberCollectionState = [0], action: BaseAction) => {
  switch (action.type) {
    case Actions.GET_NUMBER_REQUEST_COMPLETED:
      return [...state, action.payload]
    case Actions.GET_HIGHER_NUMBER_REQUEST_COMPLETED:
      return [...state, action.payload]
  }
  return state
};

export function* watchNewGeneratedNumberRequestStartSaga( ) {
  yield all([
          takeEvery( Actions.GET_NUMBER_REQUEST_START, requestNewGeneratedNumberSaga),
      ])
}

function* requestNewGeneratedNumberSaga() {

  const {generatedNumber, generatedHigherNumber} = yield all({
    generatedNumber:  call(generateNewNumber),
    generatedHigherNumber:  call(generateHigherNewNumber)
  })
      yield put(numberRequestCompletedAction(generatedNumber))
      yield put(higherNumberRequestCompletedAction(generatedHigherNumber))

}


