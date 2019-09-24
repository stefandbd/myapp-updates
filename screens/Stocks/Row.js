import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles.js';
import propTypes from 'prop-types';
import TextAvatar from 'react-native-text-avatar';
import { StackActions, NavigationActions } from 'react-navigation';

class Row extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const colorChange = this.props.data.intradayPriceMutation < 0 ? styles.lessGain : styles.moreGain;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StockDetail',
      params: {
              name: this.props.data.name,
              closePrice: this.props.data.priceDetails.closePrice.value,
              highPrice: this.props.data.priceDetails.highPrice.value,
              lowPrice: this.props.data.priceDetails.lowPrice.value,
              currentPrice: this.props.data.currentPrice.value,
              intradayPriceMutation: this.props.data.intradayPriceMutation,
              datetime: this.props.data.datetime
    }})],
    });
    return (
          <TouchableOpacity style={styles.flatview} onPress={() => {
            this.props.navigation.dispatch(resetAction);
            }}>
              <View style={styles.rowContainer}>
                <TextAvatar
                  backgroundColor = {'#666699'}
                  textColor={'#fff'}
                  size={60}
                  type={'circle'}
                  >
                    {this.props.data.name}
                </TextAvatar>
              <View style={styles.nameText}>
               <Text style={styles.primaryText} numberOfLines={1} ellipsizeMode='tail'>
                  {this.props.data.name}
                </Text>
              </View>
              <View style={colorChange}>
                <Text style={styles.priceText}>{this.props.data.intradayPriceMutation.toFixed(4)}</Text>
              </View>
            </View>
          </TouchableOpacity>
    );
  }
}

  Row.propTypes = {
    data: propTypes.shape({
      intradayPriceMutation: propTypes.number.isRequired,
      name: propTypes.string.isRequired
    })
  };

  export default Row;


