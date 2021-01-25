/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavigationUtils from '../../navigation/NavigationUtils';
const HomeScreen = (props) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{ height: 50, width: 100, margin: 20, backgroundColor: 'yellow' }}
        onPress={() => NavigationUtils.push(props.componentId, 'Login', 'Login')}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ height: 50, width: 100, backgroundColor: 'green' }}
        onPress={() => NavigationUtils.push(props.componentId, 'SearchFilter', 'Search Filter')}
      >
        <Text>Search Filter</Text>
      </TouchableOpacity>
      {/* <Icon name="code" size={28} /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
