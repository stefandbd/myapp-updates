import {StyleSheet, Dimensions, Platform} from 'react-native';
const { width, height } = Dimensions.get('window');
import { AppSizes, AppStyles, AppColors } from '../../theme';
import {Fonts} from '../../assets/fonts';


export default StyleSheet.create({

    mainContainer:{
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        justifyContent: 'center',
      },
      forgotView:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: -15,
        marginBottom: 15
      },
      forgotText:{
        color: AppColors.textWhite,
        fontSize: 12,
        textDecorationLine: 'underline',
      },
      forgotTextLine:{
        color: AppColors.textWhite,
        fontSize: 12,
        paddingLeft: 5,
        paddingRight: 5
      },
      loginSubView:{
        marginBottom: 15,
      },
      loginView:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonLogin:{
        backgroundColor: AppColors.brand.primary,
        opacity:0.9,
        borderRadius: 5,
        width:AppSizes.screen.width*0.8,
        height:50,
        justifyContent: 'center', 
        alignItems: 'center' 
      },
      buttonLogin2:{
        backgroundColor: AppColors.brand.third,
        opacity:0.9,
        borderRadius: 5,
        width:AppSizes.screen.width*0.8,
        height:50,
        justifyContent: 'center', 
        alignItems: 'center' 
      },
      touchableLogin:{
        color: AppColors.textWhite,
        fontSize: 15,
        fontWeight: '500',
      },
      textInput:{
          position: 'relative',
          backgroundColor: AppColors.primary,
          color: AppColors.textWhite,
          fontSize:15,
          height: 50,
          paddingLeft:10,
        },
        imgBg: { 
          flex:1,
          width: width,
          height: height,
        },
        loginTitle:{
          fontSize: 38,
          color: AppColors.textWhite,
          fontFamily: Fonts.MontserratLight
        },
        loginSubtitle:{
          fontSize: 25,
        },
        stateMessage:{
          fontSize: 14, 
          color: AppColors.brand.third, 
          padding: 5
        },
        loginButtonView:{
          flexDirection: 'row', 
          marginBottom: 5,
          justifyContent: 'center',
          alignItems: 'center'
        },
        inputView:{
          backgroundColor: 'rgba(255,2,102,0.2)',
          borderRadius: 5,
          marginBottom: 10,
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
         textAlign:'center',
         justifyContent: 'center',
         alignItems: 'center'
       },
       mainContainerLogged:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
       }
});