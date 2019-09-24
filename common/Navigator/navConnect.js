import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import stackNav from './stacknav';
import SideMenu from '../Sidemenu/Sidemenu'


const drawernav = createDrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width,  
});
export default createAppContainer(drawernav);
