import { combineReducers } from 'redux';
import {
  reducer as numberCollection,
  NumberCollectionState,
} from '../modules/collection/numberCollection';
import {reducer as currencyReducer } from '../modules/currency/currency'

export interface IAppState {
  numberCollection: NumberCollectionState;
  currency: any
}

export const rootReducer = combineReducers<IAppState>({
  numberCollection: numberCollection,
  currency: currencyReducer
});
