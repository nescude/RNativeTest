import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styler from '../styles/textStylers';
import colors from '../styles/colors';


interface Props {
    title?: string;
    value?: string;
    icon?:string;
    subItems?: JSX.Element;
}

const DetailRow = ({ title, value, icon, subItems}: Props) => {


    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                {!!icon && (
                    <FontAwesome5Icon name={icon} size={25} color={colors.header_bg} solid>  </FontAwesome5Icon>
                )}
                {!!title && (
                    <Text style={styler.detailText}>{title}</Text>
                )}
                {!!value && (<Text style={styler.detailSubText}>{value}</Text>)}
                
            </View>
            {!! subItems && (
                <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                }}
            />
            )}
            <View style={styles.subContainer}>
                {subItems}
            </View>
        </View>
    );


}
export default DetailRow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: '4%',
        paddingBottom: '2%',
        paddingLeft: '4%',
        alignItems: 'stretch',
        flexWrap: 'wrap',
    },
    subContainer: {
        paddingLeft: '12%',
    },
    
});