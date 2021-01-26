import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Navigation } from 'react-native-navigation';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Filter from '../../screens/Filter';
const HomeHeader = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon size={Fonts.size.s16} name="ic-menu" color={Colors.blackIcon} />
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Filter',
                options: {
                  topBar: {
                    title: {
                      text: 'filter',
                    },
                  },
                },
              },
            })
          }
        >
          <Icon size={Fonts.size.s16} name="ic-search" color={Colors.blackIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
Navigation.registerComponent('Filter', () => Filter);

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
