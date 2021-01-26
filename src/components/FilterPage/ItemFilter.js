/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconStar from '../HomePage/IconStar';
import IconBook from '../HomePage/IconStar';


const ItemFilter = (props) => {
  var iconRatings = [];

  for (let i = 0; i < props.item.rating; i++) {
    iconRatings.push(<IconStar color="#FACC2E" />);
  }
  for (let i = 0; i < 5 - props.item.rating; i++) {
    iconRatings.push(<IconStar color="#FACC2E" />);
  }
  return (
    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: props.item.image,
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{props.item.name}</Text>
        <Text style={styles.text}>{props.item.author}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>{iconRatings}</View>
          <Text>{props.item.numberBuyer}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>{<IconBook />}</View>
          <Text>{props.item.numberBuyer}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemFilter;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 150,
    borderRadius: 4,
  },
  content: {
    paddingLeft: 10,
    paddingTop: 20,
  },
  text: {
    fontSize: 16,
  },
});
