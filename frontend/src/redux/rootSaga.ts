import { all, fork } from 'redux-saga/effects';
import {watchNewGeneratedNumberRequestStartSaga} from "../modules/collection/numberCollection";
import {socketRootSaga} from "../modules/currency/socket";

export const rootSaga = function* root() {
    yield all([fork(watchNewGeneratedNumberRequestStartSaga), fork(socketRootSaga)])
}
