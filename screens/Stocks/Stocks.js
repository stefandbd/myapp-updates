import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Text, View, FlatList, ImageBackground} from 'react-native';
import styles from './styles';
import NavigatorStyle from '../../common/Navigator/NavigatorStyle';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Row from './Row';
import Loader from '../../common/Loader/Loader';
import { fetchAPI } from '../../redux/actions/fetchAPI';
import {imgBgList} from '../../resources/constants';


class Stocks extends Component {
static navigationOptions = ({navigation}) => NavigatorStyle.getMainNavStyle('Stocks',
() => { navigation.openDrawer()});
  constructor (props) {
    super(props);
    console.log('props',props);
    this.state = {
        isConnected: true,
        textFromInput:'',
        loading: true,
      };
}

componentDidMount() {
    setTimeout(() => {
        this.setState({loading: false });
      },5000)
    this.timer = setInterval(()=> this.props.fetchAPI(), (this.state.loading ? 5000 : 10000));
  }
  
  componentWillUnmount() {
    console.log("Unmounting Timer...");
    clearInterval(this.timer);
    this.timer = null; 
  }


    render() {
    const { items, isFetching } = this.props.items;
    if (this.state.loading) {
        if (!this.state.isConnected) {
          return <Offline />;
        }
        return  <Loader
        loading={this.state.loading} />;
      }
        return (
            <ImageBackground style={styles.imgBg} resizeMode='cover' source={imgBgList}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>
                   Welcome, <Text style={styles.welcomeUser}>{this.props.username} !</Text>
                </Text>
            </View>
                <View style={{margin: 20}}/>
                <FlatList
                    data={items}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Row key={item.name} data={item} navigation={this.props.navigation} />}
                    keyExtractor={item => item.uid}
                />
        </ImageBackground>
        );
    }
}


Stocks.propTypes = {
    username: PropTypes.string.isRequired,
  };

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchAPI }, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);


