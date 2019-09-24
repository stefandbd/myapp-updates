import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import { AppSizes, AppColors } from '../../theme';
import { Fonts } from '../../assets/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  navSectionStyle: {
    backgroundColor: 'transparent',
    paddingTop:20,
    paddingLeft:20,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    color: AppColors.textWhite,    
  },
  headerContainer: {
    padding: 20,
    backgroundColor: 'transparent',
    height:AppSizes.screen.height/3,
    paddingTop: 30,
    flexDirection: 'row',
  },
  headerImage:{
    width: AppSizes.screen.width-80,
    textAlign: 'center',
    alignContent: 'center',
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'column',
    marginTop:10
  },
  headerTitle: {
    color: AppColors.textWhite,
    fontFamily: Fonts.MontserratLight,
    fontSize: 20
  },
  rowItem: {
    flexDirection: 'row',
    flex:1,
    height: 40,
    borderBottomColor: AppColors.brand.borderBg,
    borderBottomWidth: 0.2,
    alignItems:'center',
  },
  rowIcon:{
    flexGrow: 1
  },
  navItemStyle: {
    color: AppColors.brand.fifth,
    fontSize: 18,
    fontFamily: Fonts.RobotoLight,
    paddingLeft: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
    flexGrow: 10
  },
  imageContainer:{
    flexGrow: 1
  },
  imgBg: { 
    flex:1,
    width: width,
    height: height,
  },
});