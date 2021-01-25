import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/thebook-appicon';
const HomeBookItem = ({ item }) => {
  const getRating = () => {
    console.log('sdsdasd' + item.rating);
    for (let i = 0; i < item.rating; i++) {
      getIconStar(Colors.primary);
    }
    for (let i = 0; i < 5 - item.rating; i++) {
      getIconStar(Colors.greyAuthor);
    }
  };
  const getIconStar = (color) => {
    return <Icon size={7} name="star" color={Colors.primary} />;
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: item.image }} style={styles.imgItem} />
      </View>
      <Text style={styles.txtNameBook}>{item.name}</Text>
      <Text style={styles.txtAuthor}>{item.author}</Text>
      <View style={styles.containerBottom}>
        <View>{getRating()}</View>
        <Text style={styles.txtNumberBuyer}>{item.numberBuyer}</Text>
      </View>
    </View>
  );
};

export default HomeBookItem;

const styles = StyleSheet.create({
  container: {
    width: 110,
    marginRight: 16,
  },
  imgItem: {
    width: 110,
    height: 160,
    borderRadius: 1.5,
    shadowColor: 'rgba(0, 0, 0, 0.22)',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  txtNameBook: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: Fonts.type.primary,
    marginTop: 8,
  },
  txtAuthor: {
    fontSize: 12,
    fontFamily: Fonts.type.primary,
    color: Colors.greyAuthor,
    marginTop: 2.2,
  },
  txtNumberBuyer: {
    fontSize: 9,
    fontFamily: Fonts.type.primary,
    color: Colors.greyAuthor,
    marginLeft: 8,
    marginTop: 2.2,
  },
  containerBottom: {
    flexDirection: 'row',
  },
});
