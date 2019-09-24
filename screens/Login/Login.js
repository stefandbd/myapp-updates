import React, {Component} from 'react';
import {Platform, Text, View, TextInput, ImageBackground,
   Button, KeyboardAvoidingView, NetInfo } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import CustomButton from '../../common/Buttons/CustomButton';
import {imgBg} from '../../resources/constants';
 


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
    username: '',
    password: '',
    isConnected: true,
  }
}




handleConnectivityChange = isConnected => {
  if (isConnected) {
    this.setState({ isConnected });
  } else {
    this.setState({ isConnected });
  }
};



componentDidMount() {
  NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  NetInfo.isConnected.fetch().then(isConnected => {
    console.log('First, is ' + (isConnected ? 'true' : 'false'));
    if(isConnected){
      this.setState({ isConnected: true })
    } else {
      this.setState({ isConnected: false })
    }
  });


}


componentWillUnmount() {
  NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  console.log('Login screen exit');
}

clearUsername = () => {
  this._username.setNativeProps({ text: '' });
  this.setState({ message: '' });
}

clearPassword = () => {
  this._password.setNativeProps({ text: '' });
  this.setState({ message: '' });
}


userLogin (e) {
    this.props.onLogin(this.state.username, this.state.password);
    e.preventDefault();
}





  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground style={styles.imgBg} resizeMode='cover' source={imgBg}>
        <KeyboardAvoidingView 
          behavior={Platform.select({android: null, ios: 'padding'})}
          keyboardVerticalOffset={Platform.select({ios: 60, android: 0})}
          enabled
          style={{flex:1}}>
            <View style={styles.mainContainer}>
              <View style={styles.loginView}>
                <Text 
                  style={styles.loginTitle}>
                  LOGIN
                </Text>
              </View>
            <View style={styles.inputView}>
              <TextInput
                placeholderTextColor='#fff'
                style={styles.textInput}
                ref={component => this._username = component}
                placeholder={'Username'} 
                onChangeText={(text) => this.setState({ username: text })} 
                onFocus={this.clearUsername}
                autoCapitalize={'none'}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput 
                placeholderTextColor='#fff'
                style={styles.textInput}
                ref={component => this._password = component}
                placeholder={'Password'}
                onChangeText={(text) => this.setState({ password: text })} 
                secureTextEntry={true}
                onFocus={this.clearPassword}
                onSubmitEditing={this._userLogin}
              />
            </View>
            <View style={{margin:7}} />
            <View style={styles.forgotView}>
              <Text style={styles.forgotText}>
                Forgot username?
              </Text>
              <Text style={styles.forgotTextLine}>
                |
              </Text>
              <Text style={styles.forgotText}>
                Forgot password?
              </Text>
            </View>
            <View style={styles.loginButtonView}>
              <CustomButton
                  label={'LOGIN'}
                  buttonStyle={styles.buttonLogin}
                  textColor={styles.touchableLogin}
                  onPress={(e) => this.userLogin(e)}
              />
            </View>
          </View>
      </KeyboardAvoidingView>
  </ImageBackground>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);






