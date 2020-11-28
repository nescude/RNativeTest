import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, FlatList } from 'react-native';
import { fetchUsersData } from '../redux/usersSlice';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import UserCard from '../components/UserCard';
import colors from '../styles/colors';
import  {useNavigation}  from '@react-navigation/native';
import MainHeader from '../components/MainHeader';



const Home = () => {

  const navigation = useNavigation();
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

const styles = StyleSheet.create({
  section: {
    fontSize: 11,
    backgroundColor: colors.grey.light,
    paddingVertical: '1%',
    paddingLeft: '2.5%',
    color: colors.text.dark,
    fontWeight: 'bold',
  }
});