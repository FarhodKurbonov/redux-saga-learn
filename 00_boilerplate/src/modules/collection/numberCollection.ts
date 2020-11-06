import { BaseAction, actionIds } from './types';
import {call, put, takeLatest} from 'redux-saga/effects'
import {generateNewNumber} from "../../api";
export type NumberCollectionState = number[];

export const numberRequestStartAction = (): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_START,
  payload: null,
});
export const numberRequestCompletedAction = ( numberGenerated: number ): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated
})

export const reducer = ( state: NumberCollectionState = [0], action: BaseAction) => {
  switch (action.type) {
    case actionIds.GET_NUMBER_REQUEST_COMPLETED:
      return [...state, action.payload]
  }
  return state
};


export function* watchNewGeneratedNumberRequestStartSaga( ) {
  yield takeLatest(
      actionIds.GET_NUMBER_REQUEST_START,
      requestNewGeneratedNumberSaga
  )
}

function* requestNewGeneratedNumberSaga() {
  const generatedNumber = yield call(generateNewNumber)
  yield put(numberRequestCompletedAction(generatedNumber))
}
