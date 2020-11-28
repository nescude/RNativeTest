import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import colors from '../styles/colors';
import styler from '../styles/textStylers';
import { useNavigation } from '@react-navigation/native';


interface Props {
    backButton?:any;
    title: string;
    subtitle?: string;
    rightComp?: ReactElement;
    children: JSX.Element;
}

const MainHeader = (props:Props) =>{
    const navigation = useNavigation();

    const _onBackHandler = () =>{
        navigation.navigate('Home');
    }

    return(

        <View style={styles.container}>
            <Appbar.Header style={styles.containerStyle}>
            {!! props.backButton && (
                <Appbar.BackAction onPress={_onBackHandler} color="white"/>
            )}
            <Appbar.Content title={props.title} subtitle={props.subtitle} color={'white'} titleStyle={styler.headerText} subtitleStyle={styler.headerSubText}/>
            </Appbar.Header>
            {props.children}
            
        </View>
        
        
    );
}
export default MainHeader;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    containerStyle: {
      alignItems: 'center',
      paddingBottom: '0%',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: colors.header_bg,
    }
});