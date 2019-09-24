import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import { AppColors, AppSizes } from '../../theme';
import {Fonts} from '../../assets/fonts';


export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#485775'
  },
  imgBg: { 
    flex:1,
    width: width,
    height: height,
  },
   welcome:{
     color: AppColors.textWhite,
     fontWeight: '300',
     fontSize: 22
   },
   welcomeUser:{
     color: AppColors.textWhite,
     fontWeight: '600',
     fontSize: 22
   },
   welcomeContainer:{
     marginTop: 40,
     textAlign:'center',
     justifyContent: 'center',
     alignItems: 'center'
   },
   body:{
     marginTop:40,
   },
   bodyContent: {
     flex:1,
     alignItems: 'center',
     backgroundColor: 'rgba(29,35,47,1)',
   },

     primaryText:{
      fontSize: 20,
      color: AppColors.textWhite,
      fontFamily: Fonts.MontserratLight,
      lineHeight: 60,
      marginLeft:20,
      width: width/3
    },
     flatview: {
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomColor: 'rgba(0,0,0,0.5)',
      borderBottomWidth: 0.5,
     marginLeft: 20,
     marginRight:20
    },
     rowContainer:{
      flex:1,
      flexDirection: 'row',
     },
     lessGain:{
       backgroundColor: '#cc0000',
       height: 30,
       width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:5,
      flexGrow: 2,
      marginTop:15
     },
     moreGain:{
       backgroundColor: '#33cc33',
       height: 30,
       width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:5,
      flexGrow: 2,
      marginTop:15
     },
     priceText:{
      color: AppColors.textWhite,
      lineHeight:12,
      fontSize:12,
      textAlign:'center',
     },
     nameText:{
    flexGrow: 8
    },
    inputViewCentered:{
      backgroundColor: 'rgba(255,2,102,0.2)',
      borderRadius: 5,
      marginBottom: 10,
    },
    titleView:{
    },
    dateView:{
      backgroundColor: 'rgba(48, 59, 79, 0.5)',
      padding: 10,
      borderRadius:10
    },
    title:{
      color: AppColors.textWhite,
      fontSize: 30,      
    },
    subtitle:{
      color: AppColors.brand.fifth,
      fontSize: 14, 
    },
    name:{
      fontSize:14,
      color:"#efefef",
      fontWeight:'300',
    },
    topView:{
      marginTop:15,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: AppSizes.screen.width*0.8,
      marginBottom:15
    },
    safeareaview:{
      backgroundColor: '#485775',
      flex: 1
    }
});