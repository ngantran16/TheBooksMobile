import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

const push = (componentId, screen, title) => {
  Navigation.push(componentId, {
    component: {
      name: screen,
      options: {
        topBar: {
          visible: false,
          title: {
            text: title,
          },
        },
      },
    },
  });
};

const pop = (componentId) => {
  Navigation.pop(componentId);
};
const NavigationUtils = {
  push,
  pop,
};

export default NavigationUtils;

const styles = StyleSheet.create({});
