import { StyleSheet} from 'react-native';
import  colors  from './colors';

const defaultFont = 'RobotoCondensed-Regular';

const textStylers = StyleSheet.create({
  headerText: { fontSize: 23, color:'white', fontFamily: defaultFont} ,
  headerSubText: { fontSize: 15, color:'white', fontFamily: defaultFont},
  userCardTitle: { fontSize: 20, color: colors.text.dark , fontFamily: defaultFont},
  userCardSubtitle: { fontSize: 18, color: colors.grey.dark, fontFamily: 'RobotoCondensed-Italic'},
  detailText: { fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center', paddingBottom: 4, fontFamily: defaultFont},
  detailSubText: { fontSize: 20, color: 'black', textAlign: 'right', alignContent: 'flex-end' , fontFamily: defaultFont},
});
export default textStylers;