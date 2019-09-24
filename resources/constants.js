//images

export const imgBg = require('./images/trades.png');
export const imgBgList = require('./images/Untitled.png');
export const sideBg = require('./images/sideBg.png');
export const user = require('./images/user.png');
export const menuicon = require('./images/menuicon-white.png');
export const arrow = require('./images/white-arrow.png');


// configuration for the chart in details view
export const chartConfig={
    backgroundColor: 'rgba(188,0,75, 0.8)',
    backgroundGradientFrom: 'rgba(29,35,47,0.8)',
    backgroundGradientTo: 'rgba(29,35,47, 0.8)',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }


  // possible useful constants for randomizing the colors of the list avatar items 
export const textArray = [
    '#ffff00',
    '#ff0000',
    '#990000',
    '#3399ff',
    '#0033cc',
    '#000',
    '#666699',
    '#009900',
    '#003300',
    '#cc6699'
];

export const randomNumber = Math.floor(Math.random()*textArray.length);
  