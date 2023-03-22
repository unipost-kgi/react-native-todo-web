import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { todo } from '../type/type';

import TodoItem from './TodoItem';

type Props = {
  todos: Array<todo>;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodoList({ todos, onToggle, onRemove }: Props) {
  const itemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <FlatList
      ItemSeparatorComponent={itemSeparatorComponent}
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e5e5',
  },
});
