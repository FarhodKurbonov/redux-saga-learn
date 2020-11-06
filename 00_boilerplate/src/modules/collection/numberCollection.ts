import { BaseAction, Actions } from './types';
import {call, put, throttle, all} from 'redux-saga/effects'
import {generateNewNumber} from "../../api";
export type NumberCollectionState = number[];

export const numberRequestStartAction = (): BaseAction => ({
  type: Actions.GET_NUMBER_REQUEST_START,
  payload: null,
});
export const numberRequestCompletedAction = ( numberGenerated: number ): BaseAction => ({
  type: Actions.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated
})

export const reducer = ( state: NumberCollectionState = [0], action: BaseAction) => {
  switch (action.type) {
    case Actions.GET_NUMBER_REQUEST_COMPLETED:
      return [...state, action.payload]
  }
  return state
};


export function* watchNewGeneratedNumberRequestStartSaga( ) {
  yield all([
          throttle(500, Actions.GET_NUMBER_REQUEST_START, requestNewGeneratedNumberSaga),
      ])
}

function* requestNewGeneratedNumberSaga() {
  const generatedNumber = yield call(generateNewNumber)
  yield put(numberRequestCompletedAction(generatedNumber))
}
