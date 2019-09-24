import React, { Component } from 'react';
import {Text, View, ScrollView, Dimensions, SafeAreaView} from 'react-native';
import styles from './styles.js';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import NavigatorStyle from '../../common/Navigator/NavigatorStyle';
import {LineChart} from 'react-native-chart-kit';
import {chartConfig} from '../../resources/constants';
import MaterialTabs from 'react-native-material-tabs';
const screenWidth = Dimensions.get('window').width


class StockDetail extends Component {
static navigationOptions = ({navigation}) => NavigatorStyle.getTitleNameStyle(navigation.state.params.name, navigation);
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

setTab = selectedTab => {
  this.setState({ selectedTab });
};

componentWillUnmount() {
  console.log("Unmounting Details View...");
}

  render() {
    console.log('details', this.props.navigation.state.params);
    console.log('navigation ----', this.props.navigation);
    const myArray = [this.props.navigation.state.params.closePrice,
      this.props.navigation.state.params.highPrice,
      this.props.navigation.state.params.lowPrice]
    const data = {
      labels: ['Close Price', 'High Price', 'Low Price'],
      datasets: [{
        data: myArray
      }]
    }
    const myDate = this.props.navigation.state.params.datetime.slice(0, 10);
    const myTime = this.props.navigation.state.params.datetime.slice(11, 19);
    const signChange = this.props.navigation.state.params.intradayPriceMutation < 0 ? '' : '+';


    return (
        <ScrollView style={styles.container}>
          <View style={styles.bodyContent}>
          <View style={styles.topView}>
            <View style={styles.titleView}>
              <Text style={styles.title}>&euro; {this.props.navigation.state.params.currentPrice}</Text>
              <Text style={styles.subtitle}>{signChange}{this.props.navigation.state.params.intradayPriceMutation.toFixed(4)}</Text>
            </View>
            <View style={styles.dateView}>
              <Text style={styles.name}>{myDate}</Text>
              <Text style={styles.name}>{myTime}</Text>
            </View>
            </View>
            <LineChart
              data={data}
              width={screenWidth-20}
              height={220}
              chartConfig={chartConfig}
              bezier
            />
            </View>
            <SafeAreaView style={styles.safeareaview}>
            <MaterialTabs
              items={['Info', 'Sell', 'Buy']}
              selectedIndex={this.state.selectedTab}
              onChange={this.setTab}
              barColor="#303b4f"
              indicatorColor="#ff0266"
              activeTextColor="white"
            />
           </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      items: state.items,
    };
  };
  
  export default connect(mapStateToProps)(StockDetail);

  StockDetail.propTypes = {
    navigation: propTypes.shape({
      state: propTypes.shape({
          params: propTypes.shape({
            datetime: propTypes.string.isRequired,
            closePrice: propTypes.number.isRequired,
            highPrice: propTypes.number.isRequired,
            lowPrice: propTypes.number.isRequired,
          })
      })
  })
  };
