import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';

const TypeHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.txtViewAll}>Xem hết</Text>
      </View>
    </View>
  );
};

export default TypeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtViewAll: {
    fontSize: 12,
    color: Colors.secondary,
    fontFamily: Fonts.type.primary,
  },
  txtTitle: {
    fontSize: 16,
    fontFamily: Fonts.type.primary,
  },
});
