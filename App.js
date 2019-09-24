import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Navigator from './common/Navigator/navConnect'
import configureStore from './redux/configureStore';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator onNavigationStateChange={null} />
      </Provider>
    );
  }
}

export default App;


