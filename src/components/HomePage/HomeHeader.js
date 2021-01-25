import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hung</Text>
      </View>
      <View style={styles.searchContainer}>
        <Text>Hung</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    marginTop: 30,
  },
  searchContainer: {
    marginRight: 3,
  },
});
