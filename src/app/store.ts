import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import layoutGrid from '../reducers/layout';
import editorReducer from '../reducers/editor';
import nodeIdReducer from '../reducers/getNodeId';
import labelReducer from '../reducers/labels';
import nodesReducer from '../reducers/nodes';
import filterByTitleReducer from '../reducers/filterByTitle';
import collabaratorReducer from '../reducers/collabarator';
import refreshPageReducer from '../reducers/refreshPage';
import checkoutsReducer from '../reducers/checkouts';

export const store = configureStore({
  reducer: {
    layoutGrid,
    editorReducer,
    nodeIdReducer,
    labelReducer,
    nodesReducer,
    filterByTitleReducer,
    collabaratorReducer,
    refreshPageReducer,
    checkoutsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
