import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import image from '../assets/images/young_and_happy.png';

export default function Empty() {
  return (
    <View style={styles.block}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.description}>더 이상 할일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '##9e9e9e',
  },
  image: {
    width: 260,
    height: 190,
    marginBottom: 16,
  },
});
