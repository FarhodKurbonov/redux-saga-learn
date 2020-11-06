import { all, fork } from 'redux-saga/effects';
import {watchNewGeneratedNumberRequestStartSaga} from "../modules/collection/numberCollection";

export const rootSaga = function* root() {
    yield all([fork(watchNewGeneratedNumberRequestStartSaga)])
}
