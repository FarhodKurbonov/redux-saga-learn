import { combineReducers } from 'redux';
import {
  reducer as numberCollection,
  NumberCollectionState,
} from '../modules/collection/numberCollection';

export interface IAppState {
  numberCollection: NumberCollectionState;
}

export const rootReducer = combineReducers<IAppState>({
  numberCollection: numberCollection,
});
