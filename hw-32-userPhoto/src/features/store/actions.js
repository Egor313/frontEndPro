import { createAction } from '@reduxjs/toolkit';

export const fetchUsersRequest = createAction('users/fetchUsersRequest');
export const fetchUsersSuccess = createAction('users/fetchUsersSuccess');
export const fetchUsersFailure = createAction('users/fetchUsersFailure');

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};