import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Todo from './Todo';
import useTodos from '../hook/useTodos';
import Link from '../common/Link';

const TodoList = ( ) => {
  const url ='/api';

  const { data, isLoading, isSuccess, refetch } = useTodos(url);
  if (isLoading) return <Text>is loading</Text>;
  if (!isSuccess) return <Text>Error</Text>;

  const renderItem = ({ item }:any) =>
    <Todo
      _id={item._id}
      title={item.title}
      year={item.year}
      description={item.description}
      completed={item.completed}
      publics={item.public}
      handleUpdate={refetch}
    />;

  return (
    <View>
      <View style={{ paddingBottom: 40,
        paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Link
          text='Create Todo'
          path = {'/createTodo'}
          params={''} style={styles.link}>
        </Link>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={ (item) => item._id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  link: {
    borderRadius: 8,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33f',
    color: 'white',
  },
});
