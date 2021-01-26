/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationUtils } from '../../navigation';

const HomeScreen = (props) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{ height: 50, width: 100, margin: 20, backgroundColor: 'yellow' }}
        onPress={() => NavigationUtils.push({ screen: 'Login', isTopBarEnable: false })}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
