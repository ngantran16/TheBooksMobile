import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon size={Fonts.size.s16} name="ic-menu" color={Colors.blackIcon} />
      </View>
      <TouchableOpacity style={styles.searchContainer}>
        <Icon size={Fonts.size.s16} name="ic-search" color={Colors.blackIcon} />
      </TouchableOpacity>
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
