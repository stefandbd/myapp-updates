import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './styles';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { logout } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {sideBg, user, menuicon, arrow} from '../../resources/constants';


class SideMenu extends Component {
static navigationOptions = {headerStyle: {height: 0, width: 0}}; 
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  userLogout(e) {
    this.props.onLogout();
    e.preventDefault();
    this.navigateToScreen('CheckLogin');
}

  render () {
    return (
      <ImageBackground style={styles.imgBg} resizeMode='cover' source={sideBg}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={{width:24, height:22}}></View>
              <View style={styles.headerImage}>
              <Image style={{width:72, height:72, marginBottom: 10}} source={user} />
              <Text style={styles.headerTitle}>App</Text>
              <Text style={styles.headerTitle}>{this.props.username}</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()} style={{marginTop:10}}>
              <Image style={{width:24, height:24}} source={menuicon} />
            </TouchableOpacity>
          </View>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <View style={styles.rowItem}>
                <View style={styles.rowIcon}>
                  <Icon name='cube' size={20} color="#ffe2e2" />
                </View>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Stocks')}>Stocks</Text>
                <View style={styles.imageContainer}>
                  <Image style={{width:24, height:24}} source={arrow} />
                </View>
              </View>
              <View style={styles.rowItem}>
                <View style={styles.rowIcon}>
                  <Icon name='sign-out' size={20} color="#ffe2e2" />
                </View>
                <Text style={styles.navItemStyle} onPress={(e) => this.userLogout(e)} title="Logout">Logout</Text>
                <View style={styles.imageContainer}>
                  <Image style={{width:24, height:24}} source={arrow} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>&copy; Stefan Oprea 2019</Text>
        </View>
      </View>
    </ImageBackground>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
      username: state.auth.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogout: () => { dispatch(logout()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);