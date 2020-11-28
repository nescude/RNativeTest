import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import { fetchUsersData } from '../redux/usersSlice';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import UserCard from '../components/UserCard';
import MainHeader from '../components/MainHeader';



const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);
 
  const selectUsers = createSelector(
    (state: RootState) => state.users,
    (users) => users.users,
  );
  const users = useSelector(selectUsers);

  const _keyExtrator = (id: string) => id.toString();

  const _renderItem = ({ item }: { item: string }) => (
    <UserCard userId={item} />
  );

  return (
    <>
      <MainHeader title='User List'>
        <FlatList
            data={users}
            keyExtractor={_keyExtrator}
            renderItem={_renderItem}
        />
      </MainHeader>
    </>
  );
}

export default Home;