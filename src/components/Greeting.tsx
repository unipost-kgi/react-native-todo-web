import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

type Props = {
  name?: ReactNode;
};

export default function Greeting({ name }: Props) {
  return (
    <>
      <View>
        {/* 주석 */}
        <Text>Hello {name}!</Text>c
      </View>
      <Text>Etc {name}!</Text>
    </>
  );
}

Greeting.defaultProps = {
  name: 'react-native',
};
