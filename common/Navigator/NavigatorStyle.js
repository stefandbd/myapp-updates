import React from 'react';
import {View, TouchableOpacity, Image, Platform} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import {menuicon} from '../../resources/constants';
import { StackActions, NavigationActions } from 'react-navigation';
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Stocks'})],
});

class NavigatorStyle {

    static getNoHeaderStyle() {
        return {
            header: null,
        };
    }

    static getMainNavStyle(title, onPress, headerLeft, headerRight) {
        return {
        title: title,
        headerLeft:(<View><TouchableOpacity style={{marginLeft:10}} onPress={onPress}>
                            <Image style={{width:24, height:22}}
                                source={menuicon}/>
                          </TouchableOpacity></View>
        ),
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#d10052',
            opacity: 0.8,
            marginLeft: Platform.OS === 'ios' ? 10 : 0,
        },
        headerRight:(<View></View>),
        headerTitleStyle:{
            textAlign: 'center',
            alignSelf:'center',
            flex: 1
        }
    };
    }

    static getBackStyle(title) {
        return {
            title: title,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#d10052',
                opacity: 0.8,
                marginLeft: Platform.OS === 'ios' ? 10 : 0,
            },
            headerRight:(<View></View>),
            headerTitleStyle:{
                textAlign: 'center',
                alignSelf:'center',
                flex: 1
            }
        };
    }

    static getTitleNameStyle(title, navigation) {
        return {
            title: title,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#d10052',
                opacity: 0.8,
                marginLeft: Platform.OS === 'ios' ? 10 : 0,
            },
            headerRight:(<View></View>),
            headerLeft: <HeaderBackButton tintColor={'white'} onPress={() => navigation.dispatch(resetAction)} />,
            headerTitleStyle:{
                textAlign: 'center',
                alignSelf:'center',
                flex: 1,
            }
        };
    }

}



export default NavigatorStyle;