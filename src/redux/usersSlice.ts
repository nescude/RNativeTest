import { User } from '../utils/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import Axios, { AxiosResponse } from 'axios';
import { normalize, schema } from 'normalizr';
import orderBy from 'lodash/orderBy';
import { Alert } from 'react-native';

export interface NormalizerResult {
  result: string[];
  entities: { users: { [id: string]: User } };
}


interface NormalizedObjects<T> {
  byId: { [id: string]: T };
  users: string[];
}


interface UsersState {
  users: NormalizedObjects<User>;
}


const initialState: UsersState = {
  users: {
    byId: {},
    users: [],
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserDataSuccess(state, action: PayloadAction<User[]>) {
      const users = action.payload;

      const sortedUsers: User[] =
        users.length > 0 ? orderBy(users, ['name'], ['asc']) : [];

      const userEntity = new schema.Entity('users');

      const normalizedData: NormalizerResult = normalize(sortedUsers, [
        userEntity,
      ]);

      state.users.byId = normalizedData.entities.users;

      state.users.users = [];

      sortedUsers.map((user) => {
        state.users.users.push(user.id);
      });
    }
  },
});


export const {
  getUserDataSuccess,
} = usersSlice.actions;


export default usersSlice.reducer;


export const fetchUsersData = (): AppThunk => async (dispatch) => {
  try {

    const response: AxiosResponse< User[] > = await Axios.get( 'https://jsonplaceholder.typicode.com/users', { timeout: 5000 });

    const usersData = response.data;
    
    dispatch(getUserDataSuccess(usersData));
  } catch (error) {
    Alert.alert('Error', 'Error retrievieng users data', [{text: 'OK', onPress: () => {}}],{ cancelable: false },);
  }
};
