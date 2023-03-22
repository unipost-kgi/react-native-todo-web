import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  rounded?: boolean;
  size?: string;
  color?: string;
};

export default function Box({ rounded, size, color }: Props) {
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size !== undefined ? size : ''],
        {
          backgroundColor: color,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: 'skyblue',
  },
  rounded: {
    borderRadius: 20,
  },
  small: {
    width: 60,
    height: 60,
  },
  medium: {
    width: 120,
    height: 120,
  },
  large: {
    width: 240,
    height: 240,
  },
});

const sizes: { [key: string]: object } = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

Box.defaultProps = {
  rounded: false,
  size: 'medium',
  color: 'skyblue',
};
