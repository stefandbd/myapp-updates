import { createStackNavigator } from  'react-navigation';
import CheckLogin from "../../screens/Login/CheckLogin";
import Login from "../../screens/Login/Login";
import Stocks from "../../screens/Stocks/Stocks";
import StockDetail from "../../screens/Stocks/StockDetail";


const stackNav = createStackNavigator({
  CheckLogin : {
    screen: CheckLogin,
  },
  Login : {
    screen: Login,
  },
  Stocks : {
    screen: Stocks,
  },
  StockDetail: {
    screen: StockDetail,
  }
});


export default stackNav;