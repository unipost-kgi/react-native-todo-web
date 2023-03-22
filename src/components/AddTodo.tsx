import React, { useState } from 'react';
import { Image, Keyboard, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import addWhiteImage from '../assets/icons/add_white/add_white.png';

type Props = {
  onInsert: (text: string) => void;
};

export default function AddTodo({ onInsert }: Props) {
  const [text, setText] = useState('');

  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={addWhiteImage} />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        {button}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 80,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 24,
    paddingVertical: 8,
  },
  buttonStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
