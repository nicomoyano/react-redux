import { configureStore } from '@reduxjs/toolkit';
import { toDosReducer } from '../reducers/toDosReducer';
import { filterReducer } from '../reducers/filterReducer';
import { userReducer } from '../reducers/userReducer';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../sagas/sagas';

export const createStore = () => {
  let store = configureStore({
    reducer: {
      toDosState: toDosReducer,
      filterState: filterReducer,
    },
  });

  return store;
};

export const createAsyncStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let store = configureStore({
    reducer: {
      toDosState: toDosReducer,
      filterState: filterReducer,
      userState: userReducer,
    },
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(watcherSaga);

  return store;
};
