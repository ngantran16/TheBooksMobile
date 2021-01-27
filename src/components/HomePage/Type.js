import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HomeBookItem from './HomeBookItem';
import TypeHeader from './TypeHeader';
const Type = ({ title }) => {
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
      name: 'Để con được ốm',
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
    <View style={styles.container}>
      <TypeHeader title={title} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scvContainer}
      >
        {listBooks.map((item) => {
          return <HomeBookItem item={item} key={item.id} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },
  scvContainer: {
    marginTop: 8,
  },
});
