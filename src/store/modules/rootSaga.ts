import { SagaIterator } from '@redux-saga/types';
import { all } from 'redux-saga/effects';

import cartSaga from './cart/sagas';

export default function* rootSaga(): SagaIterator {
  return yield all([
    cartSaga,
  ])
}