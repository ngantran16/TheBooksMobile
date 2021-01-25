/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavigationUtils from '../../navigation/NavigationUtils';
import Root from '../../navigation/Root';
const HomeScreen = (props) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'pink',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push(props.componentId, 'Introduction', 'Introduction')}
      >
        <Text>Introduction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'yellow',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={Root.main}
      >
        <Text>Introduction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
