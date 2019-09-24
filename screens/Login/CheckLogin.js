import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logged from './Logged';
import NavigatorStyle from '../../common/Navigator/NavigatorStyle';

class CheckLogin extends Component {
static navigationOptions = NavigatorStyle.getNoHeaderStyle();


    render() {
        if (this.props.isLoggedIn) {
            return <Logged navigation={this.props.navigation}/>;
        } else {
            return <Login navigation={this.props.navigation}/>;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(CheckLogin);