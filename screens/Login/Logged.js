import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { logout } from '../../redux/actions/auth';
import styles from './styles';
import {imgBg} from '../../resources/constants';

class Logged extends Component {
  constructor (props) {
    super(props);
}
  userLogout(e) {
    this.props.onLogout();
    e.preventDefault();
}

render() {
    const { navigation } = this.props;
        return (
            <ImageBackground style={styles.imgBg} resizeMode='cover' source={imgBg}>
                <View style={styles.mainContainerLogged}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcome}>
                             Welcome, <Text style={styles.welcomeUser}>{this.props.username} !</Text>
                        </Text>
                    </View>
                <View style={{margin: 20}}/>
                    <View style={styles.loginButtonView}>
                        <TouchableOpacity style={styles.buttonLogin2}
                            onPress={(e) => navigation.navigate('Stocks', { navigation: this.props.navigation })} title="Go to Stocks">
                            <Text style={styles.touchableLogin}>Go to Stocks</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.loginButtonView}>
                        <TouchableOpacity style={styles.buttonLogin}
                            onPress={(e) => this.userLogout(e)} title="Logout">
                            <Text style={styles.touchableLogin}>LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logged);