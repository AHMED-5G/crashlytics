/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ActivityIndicator,
  ColorValue,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FunctionComponent} from 'react';

interface LoadingIndicatorInterface {
  size?: 'small' | 'large' | number;
  color?: ColorValue;
  indicatorStyle?: StyleProp<ViewStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}

const LoadingIndicator: FunctionComponent<
  LoadingIndicatorInterface
> = props => {
  return (
    <View style={[{padding: 20}, props.containerStyle]}>
      <ActivityIndicator
        style={props.indicatorStyle}
        size={props.size ? props.size : 44}
        color={props.color ? props.color : '#69d2e7'}
      />
    </View>
  );
};

export default LoadingIndicator;
