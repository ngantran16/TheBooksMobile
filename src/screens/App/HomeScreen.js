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
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'blue',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push(props.componentId, 'Detail', 'Detail')}
      >
        <Text>Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'green',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push(props.componentId, 'SearchPage', 'SearchPage')}
      >
        <Text>SearchPage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'pink',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push(props.componentId, 'ViewAll', 'ViewAll')}
      >
        <Text>ViewAll</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'red',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push(props.componentId, 'Cart', 'Cart')}
      >
        <Text>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
