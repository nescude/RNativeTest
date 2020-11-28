import { ScrollView, StyleSheet } from "react-native";
import React from 'react';
import { useSelector } from 'react-redux';
import colors from '../styles/colors';
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { createSelector } from "@reduxjs/toolkit";
import { User } from '../utils/interfaces';
import { RootState } from '../redux/rootReducer';
import { RootStackParamList } from '../utils/interfaces';
import DetailRow from '../components/DetailRow';
import MainHeader from "../components/MainHeader";

const UserDetails = () => {
    
    const navigation = useNavigation();

  
    const route = useRoute<RouteProp<RootStackParamList, 'UserDetails'>>();
    const userId = route.params?.userId;

    const selectUserData = createSelector(
      (state: RootState) => state.users.byId,
      (users) => {
        const fullUser: User = users[userId];
        return fullUser;
      },
    );
    const userData = useSelector(selectUserData);


  
    return(
        <>
        <MainHeader title="User Details" subtitle={userData.name} backButton={true}>
          <ScrollView>
              <DetailRow title="Name: " value={userData.name} icon="id-card"/>
              <DetailRow title="Username: " value={userData.username} icon="user"/>
              <DetailRow title="Email: " value={userData.email} icon="envelope"/>
              <DetailRow title="Address: " icon="map" subItems={
                <>
                  <DetailRow title="Street: " value={userData.address.street}/>
                  <DetailRow title="Suite: " value={userData.address.suite}/>
                  <DetailRow title="City: " value={userData.address.city}/>
                  <DetailRow title="Zip Code: " value={userData.address.zipcode}/>
                  <DetailRow title="Geographic Location: " subItems={
                    <>
                    <DetailRow title="Latitude: " value={userData.address.geo.lat}/>
                    <DetailRow title="Longitude: " value={userData.address.geo.lng}/>
                    </>
                  }/>
                </>
              }/>
              <DetailRow title="Phone: " value={userData.phone} icon="phone"/>
              <DetailRow title="Website: " value={userData.website} icon="globe"/>
              <DetailRow title="Company: " icon = "building" subItems={
                <>
                  <DetailRow title="Name: " value={userData.company.name} />
                  <DetailRow title="BS: " value={userData.company.bs} />
                  <DetailRow title="Catchphrase: " value={userData.company.catchPhrase}/>
                </>
              }/>
          </ScrollView>
        </MainHeader>
        </>        
    );
};
export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: '1%',
    alignContent: 'flex-start',  
  },
  leftIcon: {
    flex: 1,
    paddingTop: '0%',
    paddingLeft: '10%',
  },
  appbar: {
    backgroundColor: colors.header_bg,
  },
});