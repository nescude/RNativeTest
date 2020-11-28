import { createSelector } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RootState } from '../redux/rootReducer';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../styles/colors';
import styler from '../styles/textStylers';



interface Props {
  userId: string;
}

export const UserCard = ({ userId }: Props) => {
  const navigation = useNavigation();
  
  const selectUserData = createSelector(
    (state: RootState) => state.users.byId,
    (users) => {
      const fullUser = users[userId];

      return {
        name: fullUser?.name,
        company: fullUser?.company,
      };
    },
  );
  const { name, company} = useSelector(
    selectUserData,
    shallowEqual,
  );

  const _onPressHandler = () => {
    navigation.navigate('UserDetails', { userId });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={_onPressHandler}>
      <View
        style={{
          ...styles.dataContainer,
        }}>
        <View>
          <FontAwesome5Icon name="user" size={30} color={colors.text.dark} style={styles.userIcon}></FontAwesome5Icon>
        </View>
        <View>
          <Text style={styler.userCardTitle}>{name}</Text>
          {company  ? (
            <Text style={styler.userCardSubtitle}>{company.catchPhrase}</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const memoizedUserCard = React.memo(UserCard);

export default memoizedUserCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '2%',
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignContent: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: colors.grey.light,
  },
  userIcon: {
    paddingRight: '10%',
    paddingTop: '2%',
    paddingLeft: '5%',
  },
  dataContainer: {
    flex: 1,
    paddingVertical: '3%',
    flexDirection: 'row',
  }
});
