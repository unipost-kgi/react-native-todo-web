import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import checkImage from '../assets/icons/check_white/check_white.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  id: number;
  text: string;
  done: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodoItem({ id, text, done, onToggle, onRemove }: Props) {
  const remove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        { text: '취소', onPress: () => {}, style: 'cancel' },
        { text: '삭제', onPress: () => onRemove(id), style: 'destructive' },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && <Image source={checkImage} style={styles.checkImage} />}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity activeOpacity={0.5} onPress={remove}>
          <Icon name="delete" size={36} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 18,
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 24,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  text: {
    flex: 1,
    fontSize: 24,
    color: '#212121',
  },
  checkImage: {
    width: 24,
    height: 24,
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlaceholder: {
    width: 36,
    height: 36,
  },
});
