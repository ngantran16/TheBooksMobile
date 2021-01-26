import React from 'react';
import Icon from 'react-native-vector-icons/thebook-appicon';
const IconStar = (props) => {
  return <Icon size={props.size ? props.size : 15} name="star" color={props.color} />;
};

export default IconStar;

export const IconBook = (props) => {
  return <Icon size={props.size ? props.size : 15} name="ic-book-1" color={props.color} />;
};
