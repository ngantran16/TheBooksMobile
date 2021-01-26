/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import ItemFilter from '../../components/FilterPage/ItemFilter';
import HomeBookItem from '../../components/HomePage/HomeBookItem';

const Filter = (props) => {
  const [select, setSelect] = useState(false);
  const [iconActive, setIconActive] = useState(false);

  const listBooks = [
    {
      id: '1',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 3,
      numberBuyer: 12323,
    },
    {
      id: '2',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'de men phieu luu ki',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
    {
      id: '3',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
    {
      id: '4',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
    {
      id: '5',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 3,
      numberBuyer: 12323,
    },
    {
      id: '6',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 2,
      numberBuyer: 12323,
    },
    {
      id: '7',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
    {
      id: '8',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.filter}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Thể loại</Text>
          {/* <Icon size={20} name="filter" color="grey" iconStyle={{ marginRight: 50 }} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.text}>Sắp xếp</Text>
          {/* <Icon size={20} name="select" color="grey" /> */}
        </TouchableOpacity>
        {iconActive === false ? (
          <TouchableOpacity style={styles.btn3} onPress={() => setSelect(true)}>
            <Icon size={30} name="ic-filter-change" color="grey" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn3} onPress={() => setSelect(false)}>
            <Icon size={30} name="ic-filter-change-2" color="grey" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.content}>
        {listBooks.map((item) => {
          return select === false ? (
            <ItemFilter item={item} key={item.id} />
          ) : (
            <HomeBookItem item={item} key={item.id} />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: { flex: 1 },
  filter: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    borderColor: 'grey',
  },
  text: {
    fontSize: 15,
    paddingRight: 100,
    marginTop: 15,
    marginLeft: 15,
  },
  btn: {
    width: '40%',
    height: 50,
    borderColor: 'grey',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  btn2: {
    width: '45%',
    height: 50,
    borderColor: 'grey',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  btn3: {
    width: '15%',
    height: 50,
    borderColor: 'grey',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 15,
    padding: 20,
  },
});
