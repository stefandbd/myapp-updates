import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';

export default function CustomButton({
  onPress,
  label = '',
  buttonStyle,
  textColor,
}) {

  return (
    <TouchableOpacity style={buttonStyle}
            onPress={onPress}>
           <Text style={textColor}>{label.toUpperCase()}</Text>
       </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  onPress: propTypes.func.isRequired,
  label: propTypes.string,
  buttonStyle: propTypes.any,
  textColor: propTypes.any,
};