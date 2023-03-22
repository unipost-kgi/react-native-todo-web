import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

type Props = {
  date: Date;
};

export default function DateHead({ date }: Props) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <>
      <StatusBar backgroundColor="#26a69a" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 18,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 32,
    color: 'white',
  },
});
