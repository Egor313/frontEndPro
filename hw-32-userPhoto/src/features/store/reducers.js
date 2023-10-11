import { createReducer, createAction } from '@reduxjs/toolkit';

export const setWaiterList = createAction('waiter/setList');
export const setEditWaiter = createAction('waiter/setEdit');
export const removeWaiter = createAction('waiter/remove');
export const createWaiter = createAction('waiter/create');
export const updateWaiter = createAction('waiter/update');

const DEFAULT_WAITER = {
  firstName: '',
  phone: '',
};

const initialState = {
  editingWaiter: DEFAULT_WAITER,
  list: [],
};

export const waiterReducer = createReducer(initialState, {
  [setWaiterList]: (state, action) => {
    state.list = action.payload;
  },
  [setEditWaiter]: (state, action) => {
    state.editingWaiter = action.payload;
  },
  [removeWaiter]: (state, action) => {
    state.list = state.list.filter((waiter) => waiter.id !== action.payload);
  },
  [createWaiter]: (state, action) => {
    state.list.push(action.payload);
    state.editingWaiter = { ...DEFAULT_WAITER };
  },
  [updateWaiter]: (state, action) => {
    state.list = state.list.map((waiter) =>
      waiter.id === action.payload.id ? action.payload : waiter
    );
    state.editingWaiter = { ...DEFAULT_WAITER };
  },
});