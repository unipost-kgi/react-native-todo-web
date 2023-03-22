import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function Counter({ count, onIncrease, onDecrease }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});
